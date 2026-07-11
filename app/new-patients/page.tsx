import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients",
  description: `New patient information for the endocrinology practice of ${siteConfig.doctorName}.`,
};

const steps = [
  { title: "Contact the office", body: "Ask about current appointment availability and whether a referral is needed for your plan or visit type." },
  { title: "Confirm insurance", body: "Verify current network participation with both the practice and your health plan before receiving care." },
  { title: "Arrange records", body: "The office will explain which records, laboratory results, imaging, medication lists, or referral documents may be needed." },
  { title: "Prepare for the visit", body: "Bring identification, insurance information, an updated medication list, and the materials requested by the practice." },
];

export default function NewPatientsPage() {
  return (
    <>
      <section className="bg-teal-50">
        <div className="page-shell py-20 lg:py-24">
          <p className="eyebrow">New patients</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">A clear path to your first appointment.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">To request an appointment, please call the office at {siteConfig.phoneDisplay}. The steps below outline what to have ready before your first visit.</p>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <SectionHeading eyebrow="Getting started" title="Four steps before your first visit." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-bold text-teal-700">STEP {index + 1}</p>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">{step.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <SectionHeading eyebrow="Bring with you" title="Helpful information for a productive visit." />
            <div className="mt-8 grid gap-3">
              {["Photo identification and insurance card", "Current medication and supplement list", "Relevant recent laboratory or imaging results", "Referral paperwork, when required", "A concise list of questions or concerns"].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800"><CheckIcon className="h-4 w-4" /></span>
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-[2rem] bg-teal-900 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-200">Insurance note</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold">Directory information may not always be current.</h2>
            <p className="mt-5 leading-7 text-teal-100">Please contact the office and your health plan directly to confirm current insurance participation and referral requirements.</p>
            <a href={siteConfig.phoneHref} className="button-light mt-7">Call {siteConfig.phoneDisplay} <ArrowRightIcon className="h-4 w-4" /></a>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
