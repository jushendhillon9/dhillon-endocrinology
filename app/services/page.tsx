import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Endocrinology conditions and services offered by ${siteConfig.doctorName}.`,
};

const serviceDetails = [
  { title: "Diabetes care", body: "Evaluation and ongoing management for diabetes, glucose patterns, medication strategy, and related metabolic concerns." },
  { title: "Thyroid care", body: "Assessment and management of thyroid function disorders, nodules, and other thyroid-related concerns within the scope of the practice." },
  { title: "Bone and mineral health", body: "Evaluation of osteoporosis, calcium balance, parathyroid conditions, and related risk factors." },
  { title: "Pituitary and adrenal care", body: "Thoughtful evaluation of symptoms, laboratory findings, and imaging related to pituitary or adrenal function." },
  { title: "Hormonal and metabolic conditions", body: "Care for endocrine concerns that require careful interpretation across symptoms, history, and testing." },
  { title: "Longitudinal endocrine management", body: "Ongoing follow-up, monitoring, and adjustment for conditions that benefit from continuity over time." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white">
        <div className="page-shell py-20 lg:py-24">
          <p className="eyebrow">Conditions and services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">Specialized endocrinology care, explained clearly.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">The practice evaluates and manages hormonal, metabolic, thyroid, diabetes, and bone-health concerns. Final service language should match {siteConfig.shortDoctorName}’s exact clinical scope.</p>
        </div>
      </section>

      <section className="page-shell py-16 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => (
            <article key={service.title} className="card p-7">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-800"><CheckIcon className="h-5 w-5" /></span>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <SectionHeading eyebrow="Before scheduling" title="Not sure whether your concern fits the practice?" body="Call the office with a brief, non-urgent description of the reason for referral or visit. The team can explain the next administrative step without providing medical advice online." />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="font-semibold text-white">Please do not use this website for urgent symptoms or emergencies.</p>
            <p className="mt-3 leading-7 text-slate-300">Call 911 or seek immediate medical care when appropriate. Website information is educational and does not replace an evaluation by a qualified clinician.</p>
            <Link href="/contact" className="button-light mt-6">Contact the office <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
