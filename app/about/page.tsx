import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.doctorName} and his approach to endocrinology care.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">About the physician</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">{siteConfig.doctorName}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">Endocrinologist focused on thoughtful evaluation, physiology, and care plans patients can understand.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">Credentials to confirm</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Medical school: [Add]</li>
              <li>• Residency: [Add]</li>
              <li>• Endocrinology fellowship: [Add]</li>
              <li>• Board certification: [Confirm exact wording]</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-12 py-20 lg:grid-cols-[.75fr_1.25fr] lg:py-24">
        <div>
          <p className="eyebrow">Physician biography</p>
          <p className="mt-4 text-sm text-slate-500">Replace this placeholder with an approved professional headshot.</p>
          <div className="mt-5 aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-teal-100 to-slate-200 p-8">
            <div className="flex h-full items-end rounded-3xl border border-white/70 bg-white/40 p-6 backdrop-blur-sm">
              <p className="font-serif text-2xl font-semibold text-slate-700">Professional portrait</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading title="Medicine grounded in how the body works as a system." />
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>{siteConfig.shortDoctorName} is an endocrinologist who values careful reasoning, clear communication, and continuity of care. His approach begins with understanding the patient’s full clinical picture rather than treating a single number in isolation.</p>
            <p>Endocrine conditions often involve interconnected systems and evolve over time. Visits are designed to help patients understand what is happening, why a particular plan is recommended, and what will be monitored next.</p>
            <p>[Add his years of experience, prior leadership or clinical roles, languages spoken, teaching interests, and any approved personal details that help patients know him.]</p>
          </div>
          <Link href="/services" className="button-primary mt-8">View areas of care <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-teal-50 py-20">
        <div className="page-shell">
          <SectionHeading eyebrow="What patients can expect" title="A calm, structured approach to complicated questions." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.values.map((value) => (
              <article key={value.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <h2 className="font-serif text-2xl font-semibold text-slate-950">{value.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
