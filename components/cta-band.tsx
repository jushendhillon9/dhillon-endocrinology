import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-teal-900 text-white">
      <div className="page-shell grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">Questions about becoming a patient?</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Start with the practice team.</h2>
          <p className="mt-3 max-w-2xl text-teal-100">We can help confirm next steps, referral needs, records, and current appointment availability.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a href={siteConfig.phoneHref} className="button-light">
            <PhoneIcon className="h-4 w-4" />
            Call {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact" className="button-outline-light">
            Contact details
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
