import type { Metadata } from "next";
import { LocationIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Official contact and location information for ${siteConfig.doctorName}.`,
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
            <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">Phone and fax</h2>
            <a href={siteConfig.phoneHref} className="mt-4 block text-lg font-bold text-teal-800 hover:text-teal-950">{siteConfig.phoneDisplay}</a>
            <p className="mt-2 text-sm text-slate-600">Fax: {siteConfig.fax}</p>
          </div>
          <div className="card p-7">
            <LocationIcon className="h-6 w-6 text-teal-700" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-950">Practice location</h2>
            <p className="mt-4 font-semibold text-slate-900">{siteConfig.streetAddress}</p>
            <p className="mt-1 text-slate-600">{siteConfig.cityState}</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">Add parking, building, suite, accessibility, and check-in instructions here.</p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-teal-50 p-8 sm:p-10">
          <p className="eyebrow">Office hours</p>
          <div className="mt-5 divide-y divide-teal-900/10">
            {siteConfig.hours.map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between gap-5 py-4">
                <p className="font-semibold text-slate-900">{day}</p>
                <p className="text-slate-600">{hours}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-bold text-amber-950">Do not send medical details through a basic website form.</p>
            <p className="mt-2 text-sm leading-6 text-amber-900">Until the practice approves a secure patient communication system, appointment inquiries should be handled by phone or through an approved patient portal.</p>
          </div>

          <a href={siteConfig.phoneHref} className="button-primary mt-7">Call the office <PhoneIcon className="h-4 w-4" /></a>
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
