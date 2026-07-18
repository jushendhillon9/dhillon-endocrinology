import type { Metadata } from "next";
import { LocationIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Office Location",
  description: `Official contact and location information for ${siteConfig.doctorName}, endocrinologist at ${siteConfig.practiceName} — ${siteConfig.streetLine1}, ${siteConfig.streetLine2}, ${siteConfig.cityState}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.shortDoctorName}, MD — Laguna Hills, CA`,
    description: `Current office address and phone number for ${siteConfig.doctorName} at ${siteConfig.practiceName} in Laguna Hills, California.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="page-shell py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Official practice contact</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold tracking-tight sm:text-6xl">Reach {siteConfig.shortDoctorName}’s current office.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">Use the information below rather than an older third-party directory listing.</p>
        </div>
      </section>

      <section className="page-shell grid gap-8 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
        <div className="space-y-5">
          <div className="card p-7">
            <PhoneIcon className="h-6 w-6 text-teal-700" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">Phone</h2>
            <a href={siteConfig.phoneHref} className="mt-4 block text-lg font-bold text-teal-800 hover:text-teal-950">{siteConfig.phoneDisplay}</a>
            <p className="mt-2 text-sm text-slate-600">Please call the office to request an appointment.</p>
          </div>
          <div className="card p-7">
            <LocationIcon className="h-6 w-6 text-teal-700" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">Practice location</h2>
            <p className="mt-4 font-semibold text-slate-900">{siteConfig.practiceName}</p>
            <p className="mt-1 text-slate-600">{siteConfig.streetLine1}</p>
            <p className="text-slate-600">{siteConfig.streetLine2}</p>
            <p className="text-slate-600">{siteConfig.cityState}</p>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950"><LocationIcon className="h-4 w-4" />Get directions</a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-teal-50 p-8 sm:p-10">
          <p className="eyebrow">How to reach the practice</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950">Contact the office directly.</h2>
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{siteConfig.practiceName}</p>
            <p className="mt-3 font-semibold text-slate-900">{siteConfig.streetLine1}</p>
            <p className="text-slate-600">{siteConfig.streetLine2}</p>
            <p className="text-slate-600">{siteConfig.cityState}</p>
            <a href={siteConfig.phoneHref} className="mt-3 inline-block text-lg font-bold text-teal-800 hover:text-teal-950">{siteConfig.phoneDisplay}</a>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-950">Do not send medical details through a basic website form.</p>
            <p className="mt-2 text-sm leading-6 text-amber-900">Please call the office to request an appointment. Contact the office and your health plan directly to confirm current insurance participation and referral requirements.</p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.phoneHref} className="button-primary">Call office <PhoneIcon className="h-4 w-4" /></a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">Get directions <LocationIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="page-shell rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
          <h2 className="font-serif text-3xl font-semibold text-slate-950">Urgent or emergency care</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">This website and office contact channel are not monitored for emergencies. Call 911 or seek immediate medical attention for urgent symptoms. Do not delay care while waiting for a response.</p>
        </div>
      </section>
    </>
  );
}
