import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon, LocationIcon, PhoneIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Full-width specialty banner directly beneath the navigation */}
      <section className="border-b border-teal-900/10 bg-teal-50">
        <div className="page-shell py-8 text-center sm:py-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-teal-900 sm:text-3xl lg:text-4xl">
            Specialized care for complex hormonal and metabolic health.
          </h2>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="soft-grid absolute inset-0 opacity-70" />
        <div className="page-shell relative grid gap-y-8 py-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start lg:gap-x-14 lg:py-16">
          {/* Left column: doctor information and actions */}
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="eyebrow">Official practice information</p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
              {siteConfig.shortDoctorName}
            </h1>
            <p className="mt-4 text-lg font-semibold text-teal-800 sm:text-xl">
              {siteConfig.specialty} · {siteConfig.practiceName}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {siteConfig.currentPracticeNote} This is the official website for his current practice information.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
              <span className="inline-flex items-center gap-2"><LocationIcon className="h-4 w-4 shrink-0 text-teal-700" />{siteConfig.fullAddress}</span>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-950"><PhoneIcon className="h-4 w-4 text-teal-700" />{siteConfig.phoneDisplay}</a>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={siteConfig.appointmentUrl} className="button-primary">
                Request an appointment
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href="#conditions-services" className="button-secondary">
                Conditions &amp; Services
                <ChevronDownIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right column: portrait only */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-stretch">
            <div className="relative h-[440px] w-full overflow-hidden rounded-[2rem] border border-white/70 bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:h-[520px] lg:h-full lg:min-h-[520px]">
              <Image
                src={siteConfig.headshot}
                alt="Dr. Kimvir S. Dhillon, endocrinologist in Laguna Hills."
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Left column, beneath the buttons: education & training */}
          <div className="lg:col-start-1 lg:row-start-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 backdrop-blur-sm sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-800">Education &amp; training</p>
              <ul className="mt-3 space-y-3">
                {siteConfig.homeCredentials.map((item) => (
                  <li key={item.school} className="flex items-center gap-4">
                    {item.logo ? (
                      <span className="flex w-14 shrink-0 items-center justify-center">
                        <Image
                          src={item.logo}
                          alt={`${item.school} logo`}
                          width={item.logoWidth}
                          height={item.logoHeight}
                          sizes={`${item.logoWidth}px`}
                          className="object-contain"
                          style={{ width: item.logoWidth, height: item.logoHeight }}
                        />
                      </span>
                    ) : (
                      <span className="h-11 w-1 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                    )}
                    <div className="min-w-0">
                      <p className="font-serif text-lg font-semibold leading-tight text-slate-950">{item.school}</p>
                      <p className="mt-0.5 text-sm leading-snug text-slate-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950">
                Full biography &amp; credentials <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice-update card — kept, but secondary to the portrait above */}
      <section className="page-shell py-14 lg:py-16">
        <aside className="card relative overflow-hidden p-7 sm:p-9">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-teal-50" />
          <div className="relative grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-800">Practice update</span>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-slate-950">The official place to find {siteConfig.shortDoctorName}.</h2>
              <p className="mt-4 leading-7 text-slate-600">{siteConfig.previousPracticeNote}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Current practice location</p>
              <p className="mt-2 font-semibold text-slate-950">{siteConfig.practiceName}</p>
              <p className="mt-1 text-sm text-slate-600">{siteConfig.streetLine1}</p>
              <p className="text-sm text-slate-600">{siteConfig.streetLine2}</p>
              <p className="text-sm text-slate-600">{siteConfig.cityState}</p>
              <a href={siteConfig.phoneHref} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950"><PhoneIcon className="h-4 w-4" />{siteConfig.phoneDisplay}</a>
            </div>
          </div>
          <p className="relative mt-6 text-xs leading-5 text-slate-500">Official information last updated {siteConfig.lastUpdated}. Please contact the office and your health plan directly to confirm current insurance participation and referral requirements.</p>
        </aside>
      </section>

      <section id="conditions-services" className="page-shell scroll-mt-24 py-16 lg:py-20">
        <SectionHeading
          eyebrow="Conditions and services"
          title="Endocrine care built around the whole patient."
          body="Evaluation and ongoing management for a range of hormonal, metabolic, thyroid, diabetes, and bone-health concerns."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.conditions.map((condition) => (
            <div key={condition} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800"><CheckIcon className="h-4 w-4" /></span>
                <p className="font-semibold leading-6 text-slate-900">{condition}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950">
          Explore services <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="page-shell">
          <SectionHeading eyebrow="Approach to care" title="Care that is rigorous, clear, and personal." body="Endocrinology is about connected systems. Good care requires careful listening, thoughtful interpretation, and a plan patients can actually understand." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {siteConfig.values.map((value, index) => (
              <article key={value.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-bold text-teal-300">0{index + 1}</p>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{value.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-24">
        <div className="rounded-[2rem] bg-teal-50 p-8 sm:p-10">
          <p className="eyebrow">New patients</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950">Know what to expect before your first visit.</h2>
          <p className="mt-5 leading-8 text-slate-600">The office can help confirm referrals, records, insurance participation, and appointment availability before you arrive.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/new-patients" className="button-primary">New patient information <ArrowRightIcon className="h-4 w-4" /></Link>
            <Link href="/new-patients#rates" className="button-secondary">Rates &amp; payment <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Direct, current information</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950">One official source for the practice.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Provider directories can lag behind practice changes. This website is maintained by the practice so patients can verify the current office location, contact details, and patient process.</p>
          <div className="mt-7 border-l-2 border-teal-600 pl-5">
            <p className="font-semibold text-slate-950">Please use the contact information shown on this website when trying to reach {siteConfig.shortDoctorName}.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
