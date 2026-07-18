# Kimvir Dhillon, MD — Endocrinology website starter

A five-page patient-facing website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Pages

- `/` — Home
- `/about` — Physician biography and credentials
- `/services` — Conditions and services
- `/new-patients` — Scheduling, records, insurance, and first-visit process
- `/contact` — Current official address, phone, fax, and hours

## Start locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## First file to edit

Update every practice detail in:

```text
lib/site.ts
```

Search the project for `[Add]`, `[Confirm`, `[City`, `[New practice`, `[Practice`, and `[Hours]` before launch.

## Required launch replacements

1. Exact legal/brand name of the practice
2. Current address, suite, city, phone, fax, office hours, and approved email
3. Official domain is configured once in `lib/site.ts` (`siteUrl`, currently `https://drkimvirdhillon.com`) and flows into metadata, sitemap, robots, and JSON-LD
4. Approved biography, education, training, board certification language, and professional headshot
5. Exact clinical scope and services
6. Insurance and referral wording approved by the practice
7. Privacy notice, accessibility review, and any required legal policies
8. Secure scheduling or patient portal link, when selected

## Patient privacy note

The starter intentionally does not include a free-text medical contact form. Do not collect symptoms, diagnoses, medications, records, or other health information through an ordinary form or inbox. Connect a practice-approved secure scheduling or patient portal workflow before collecting sensitive information.

## Directory cleanup note

Use identical physician name, practice name, address, phone, and website details across the site, NPI/NPPES, CAQH, insurers, Google Business Profile, map listings, and physician directories.
