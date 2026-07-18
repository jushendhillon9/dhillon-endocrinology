import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Kimvir Dhillon, Endocrinologist",
  description: `Learn about ${siteConfig.doctorName}, endocrinologist in Laguna Hills, CA — his education at the University of Vermont College of Medicine, training at UCLA Medical Center, and approach to endocrinology care.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${siteConfig.shortDoctorName}, MD — Endocrinologist in Laguna Hills, CA`,
    description: `Education, training, and biography of ${siteConfig.doctorName}, endocrinologist at ${siteConfig.practiceName} in Laguna Hills, California.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">About the physician</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">{siteConfig.doctorName}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">Endocrinologist at {siteConfig.practiceName}, focused on thoughtful evaluation, physiology, and care plans patients can understand.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">Board certification</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              {siteConfig.boardCertifications.map((cert) => (
                <li key={cert.name}>• {cert.name}, {cert.year}</li>
              ))}
              <li>• Hospital affiliation: {siteConfig.hospitalAffiliation}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-12 py-20 lg:grid-cols-[.75fr_1.25fr] lg:py-24">
        <div>
          <p className="eyebrow">Physician biography</p>
          <div className="mt-5 overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
            <Image
              src={siteConfig.headshot}
              alt="Portrait of Dr. Kimvir Dhillon, MD, endocrinologist in Laguna Hills, California"
              width={800}
              height={1000}
              priority
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover object-[50%_25%]"
            />
          </div>
        </div>
        <div>
          <SectionHeading title="Medicine grounded in how the body works as a system." />
          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link href="/services" className="button-primary mt-8">View areas of care <ArrowRightIcon className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="page-shell">
          <blockquote className="mx-auto max-w-4xl border-l-4 border-teal-400 pl-6 sm:pl-10">
            <p className="font-serif text-2xl font-semibold leading-relaxed sm:text-3xl">“{siteConfig.physicianQuote}”</p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">— {siteConfig.doctorName}</footer>
          </blockquote>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-24">
        <SectionHeading eyebrow="Education and training" title="Credentials and background." />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-7">
            <h2 className="font-serif text-2xl font-semibold text-slate-950">Education</h2>
            <ul className="mt-5 space-y-4">
              {siteConfig.education.map((item) => (
                <li key={item.institution + item.detail}>
                  <p className="font-semibold text-slate-900">{item.institution}</p>
                  <p className="text-sm text-slate-600">{item.detail}, {item.year}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-7">
            <h2 className="font-serif text-2xl font-semibold text-slate-950">Postgraduate training</h2>
            <ul className="mt-5 space-y-4">
              {siteConfig.training.map((item) => (
                <li key={item.detail}>
                  <p className="font-semibold text-slate-900">{item.detail}</p>
                  <p className="text-sm text-slate-600">{item.institution}, {item.year}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-7">
            <h2 className="font-serif text-2xl font-semibold text-slate-950">Board certification</h2>
            <ul className="mt-5 space-y-4">
              {siteConfig.boardCertifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-semibold text-slate-900">{cert.name}</p>
                  <p className="text-sm text-slate-600">{cert.year}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Affiliation</p>
              <p className="mt-2 font-semibold text-slate-900">{siteConfig.hospitalAffiliation}</p>
            </div>
          </div>
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
