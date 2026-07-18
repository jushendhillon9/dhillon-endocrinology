import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Endocrinology Services",
  description: `Endocrinology conditions and services offered by ${siteConfig.doctorName} in Laguna Hills, CA — diabetes, thyroid disorders, thyroid ultrasound and biopsy, pituitary, adrenal, and parathyroid care.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Endocrinology Services — ${siteConfig.shortDoctorName}, MD, Laguna Hills, CA`,
    description: `Conditions and services offered by ${siteConfig.doctorName}, including diabetes, thyroid, pituitary, adrenal, and parathyroid care.`,
    url: "/services",
  },
};

const serviceDetails = [
  { title: "Diabetes management", body: "Evaluation and ongoing management for diabetes, glucose patterns, medication strategy, and related metabolic concerns." },
  { title: "Thyroid disorders", body: "Assessment and management of thyroid function disorders and related concerns within the scope of the practice." },
  { title: "Thyroid nodules", body: "Evaluation and monitoring of thyroid nodules, with imaging and testing interpreted in the context of the whole clinical picture." },
  { title: "Thyroid ultrasound", body: "In-office thyroid ultrasound to help evaluate the thyroid gland and characterize nodules when clinically indicated." },
  { title: "Ultrasound-guided thyroid biopsy", body: "Ultrasound-guided fine-needle biopsy of thyroid nodules when further evaluation is recommended." },
  { title: "Pituitary disorders and tumors", body: "Thoughtful evaluation of symptoms, laboratory findings, and imaging related to pituitary function and tumors." },
  { title: "Adrenal disorders and tumors", body: "Evaluation and management of adrenal gland disorders and adrenal tumors, interpreted across symptoms, history, and testing." },
  { title: "Parathyroid disorders", body: "Evaluation of calcium balance and parathyroid conditions, including related risk factors." },
  { title: "Other hormonal and metabolic conditions", body: "Care for additional endocrine concerns that require careful interpretation across symptoms, history, and testing." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white">
        <div className="page-shell py-20 lg:py-24">
          <p className="eyebrow">Conditions and services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">Specialized endocrinology care, explained clearly.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">{siteConfig.shortDoctorName} evaluates and manages a range of hormonal and metabolic conditions, with particular interests in thyroid disease, pituitary disease, adrenal tumors, and diabetes. Please contact the office to confirm whether a specific condition can be evaluated at the practice.</p>
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
