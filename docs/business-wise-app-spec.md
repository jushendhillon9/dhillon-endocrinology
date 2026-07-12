# Business Wise Data Operations — Application Specification

**Version:** 0.1 (draft)
**Source of truth:** FigJam board "Business Wise Data Operations — Current Understanding v0.1"
**Status:** Discovery-stage spec. The FigJam is explicitly *"subject to correction during discovery."* Every item marked **[ASSUMPTION]** below must be confirmed before build. Nothing here is invented as fact.

---

## 1. Product summary

A **human-in-the-loop data operations console** that turns automated signals about companies and contacts into **reviewed, approved changes** to Business Wise's internal system of record, which then flows to clients through existing infrastructure.

The application implements the **future workflow** from the FigJam. It automates detection, verification, normalization, and staging of proposed changes, and gives reviewers a UI to approve, reject, or edit each change. **No change reaches the internal database without human approval.**

### What this app is responsible for
- Ingesting signals from external sources.
- Verifying, normalizing, and entity-matching proposed changes.
- Staging proposed changes for review (never writing them live directly).
- Presenting proposed changes to human reviewers with full provenance.
- Committing approved changes to internal Azure SQL **only through a controlled write service**.
- Recording an immutable audit trail of every decision.

### What this app does NOT own (preserved existing infrastructure)
- **Azure Data Factory sync** — reused as-is (internal → client-facing).
- **Client-facing Azure SQL** — downstream read store.
- **Business Wise customer app** — client consumption surface.
- Internal Azure SQL remains the **system of record**; this app writes to it via the controlled write service.

---

## 2. Users and roles

| Role | Responsibilities | Notes |
|---|---|---|
| **Reviewer** | Approve / reject / edit proposed changes in the Review UI. | The human-in-the-loop gate. |
| **Senior reviewer / approver** *(if segregation of duties is required)* | Final approval on high-impact or new-entity changes. | **[ASSUMPTION]** — board shows one generic "human". Confirm whether tiered approval exists. |
| **Operations admin** | Configure sources, view job health, manage retries, manage users. | **[ASSUMPTION]** — implied by need to operate the pipeline; not on board. |
| **System (automated pipeline)** | Ingest, verify, normalize, match, stage. | Non-human actor; still logged as an actor in the audit trail. |

Authentication and role model are **[ASSUMPTION]** — the board does not specify an identity provider. Recommend SSO (e.g. Azure AD / Entra ID) given the Azure-centric stack. Confirm.

---

## 3. Core domain concepts

- **Signal** — a raw inbound event suggesting a company/contact may need updating.
  Sources on the board: Email bounce, Company website, Client correction, New LLC, Missive, Enrichment API.
- **Entity** — a company or contact record. Internal Azure SQL is the system of record.
- **Proposed change** — a normalized, entity-matched delta staged for review. Lives in the **proposed-change staging table**.
- **Decision** — a reviewer's approve / reject / edit action on a proposed change.
- **Approved write** — a committed change applied to internal Azure SQL via the controlled write service.
- **Audit record** — immutable log of signal → proposed change → decision → write.

---

## 4. Pipeline stages (functional spec)

Mirrors the future-workflow layers of the FigJam.

1. **Signal ingestion** — receive/queue signals with source metadata (source type, raw payload, received-at). No interpretation.
2. **Source verification** — confirm the signal is real and current; attach a **confidence score**. *(Confidence scoring is [ASSUMPTION] — recommended, not on board.)*
3. **Normalization** — transform verified data into BWise canonical standards (address, name, phone formats, etc.).
4. **Entity matching / dedup** *(**[ASSUMPTION]**, recommended)* — resolve each change to an existing entity or flag as new; prevents duplicate companies/contacts.
5. **Proposed-change staging** — persist as *proposed* (not live), carrying source, confidence, matched entity, and conflict flags.
6. **Human review (Review UI)** — reviewer sees the change with provenance and conflicts; approves / rejects / edits. **Human-in-the-loop boundary.**
7. **Approved-write service** — the **only** component permitted to write internal Azure SQL; applies approved changes transactionally and writes the audit log.
8. **Downstream (unchanged)** — internal Azure SQL → existing ADF sync → client-facing SQL → customer app.

---

## 5. Application pages / screens

This is the Next.js (App Router) surface. It covers stages 5–7 plus operations. Stages 1–4 are backend services the app reads from and triggers, not pages.

| Route | Page | Purpose |
|---|---|---|
| `/` | **Review queue (dashboard)** | List of pending proposed changes with filters (source, confidence, entity type, conflict flag). Primary work surface. |
| `/review/[changeId]` | **Change detail / review** | Side-by-side current vs. proposed values, provenance (source + confidence), conflict indicators. Approve / reject / edit actions. |
| `/entities/[entityId]` | **Entity profile** | Current record from internal SQL, history of changes, pending proposals for that entity. |
| `/history` | **Audit log** | Immutable, filterable record of all decisions and writes. Read-only. |
| `/signals` | **Signal inbox** *(admin)* | Raw incoming signals and their pipeline status (verified/normalized/matched/staged/failed). |
| `/jobs` | **Pipeline & sync health** *(admin)* | Status of ingestion, ADF sync, controlled-write service; retries and failures. |
| `/settings` | **Sources & users** *(admin)* | Configure sources, trust ranking, roles/permissions. |

Auth-gated. Route protection by role. **[ASSUMPTION]** on exact role→route mapping — confirm.

### User flow (primary)
Reviewer lands on `/` → filters queue → opens `/review/[changeId]` → inspects current vs. proposed + provenance → **approve / reject / edit** → decision recorded, approved changes handed to write service → item leaves queue → audit entry created.

---

## 6. Data model (proposed)

**[ASSUMPTION]** on storage location — recommend the staging + audit tables live in a schema **separate from** internal Azure SQL production tables, on the same or a dedicated server. Confirm.

### `signals`
`id · source_type · raw_payload (json) · received_at · status (received|verified|normalized|matched|staged|failed) · error`

### `proposed_changes`
`id · signal_id (fk) · entity_id (nullable — null = new entity) · entity_type (company|contact) · field_changes (json: field → {current, proposed}) · confidence · conflict_flags (json) · status (pending|approved|rejected|edited) · created_at`

### `decisions`
`id · proposed_change_id (fk) · reviewer_id · action (approve|reject|edit) · edited_values (json, nullable) · reason (nullable) · decided_at`

### `approved_writes`
`id · proposed_change_id (fk) · entity_id · applied_at · write_service_txn_id · status (committed|failed|rolled_back)`

### `audit_log` (append-only, immutable)
`id · actor (system|reviewer_id) · event_type · payload (json) · created_at`

Versioning / rollback support is **[ASSUMPTION, recommended]** — carry an entity version and keep prior values so any approved write can be reverted. Confirm requirement.

---

## 7. Trust, conflict, and dedup handling

The board shows six signal types converging into one collection step with **no dedup or conflict logic drawn**. Recommended behavior (**[ASSUMPTION]**, confirm):

- **Source trust ranking** — configurable priority (e.g. client correction > enrichment API). Surfaced, never silently applied.
- **Duplicate detection** — deterministic keys + fuzzy match on entity matching; duplicates merged into one proposed change or flagged.
- **Conflicting signals** — flagged on the proposed change; reviewer sees all conflicting sources.
- **Stale / low-confidence signals** — held for review or auto-expired below a threshold; never auto-applied.

---

## 8. Non-functional requirements

- **Approval invariant:** no path writes internal SQL except the controlled write service, and only for approved changes.
- **Auditability:** every signal, decision, and write is logged immutably.
- **Idempotency:** ingestion and writes are safe to retry.
- **Observability:** job/sync health visible in `/jobs`; failed ADF syncs alert.
- **Security:** SSO auth **[ASSUMPTION]**; least-privilege DB grants; direct table writes revoked from all but the write service.
- **Concurrency:** record-level locking or optimistic versioning on staging rows to prevent double-edit.

---

## 9. Tech approach

- **Frontend/app:** Next.js App Router + TypeScript + Tailwind (matches repo baseline).
- **Backend services:** signal ingestion, verification, normalization, entity matching, and the controlled-write service. **[ASSUMPTION]** these are separate services/functions rather than in-app route handlers — confirm deployment model (Azure Functions likely given the stack).
- **Data:** Azure SQL (internal, system of record; staging schema; client-facing replica), Azure Data Factory (existing sync, unchanged).

---

## 10. Open questions blocking build (must resolve in discovery)

1. **Delphi's future** — retired or still behind the pipeline? Required for *every* approved update or only some? *(Board's own red sticky.)*
2. **Staging location** — same server/schema as internal SQL or separate? Does it replace the temporary researcher table?
3. **Write path today** — is the current staff write direct to internal SQL, or already mediated?
4. **Approval roles & segregation of duties** — who may approve; can the editor also approve?
5. **Auto-approval** — may high-confidence changes bypass review, or is review always mandatory?
6. **Conflict/dedup rules** — trust ranking across the six sources; how duplicates/stale/low-confidence are handled.
7. **ADF sync** — full vs. incremental, direction, schedule/latency/SLA.
8. **Audit/rollback/versioning** — required? retention/compliance obligations?
9. **Identity provider** — Azure AD / Entra ID or other?
10. **The specific tools** — what exactly are "Missive" and the "Enrichment API," and what does "verification" check against?

---

## 11. Build scope for v1 (proposed)

**In scope:** Review queue, change detail/review, approve-reject-edit, audit log, entity profile (read), and integration points (read staging table, call controlled-write service).
**Out of scope for v1 / stubbed:** full automated ingestion+verification+normalization+matching pipeline (can start with mocked/seeded staging data), admin source configuration, tiered approval — pending discovery answers above.

*Everything marked **[ASSUMPTION]** must be confirmed with the Business Wise team before implementation begins.*
