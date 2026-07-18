import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">{siteConfig.doctorName}</p>
          <p className="mt-1 text-sm font-semibold text-teal-300">{siteConfig.specialtyFull}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            Independent endocrinology care focused on clear explanations, careful evaluation, and long-term partnership.
          </p>
          <p className="mt-5 text-xs text-slate-500">Official practice information last updated {siteConfig.lastUpdated}.</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Navigate</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Practice</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
            <p>{siteConfig.practiceName}</p>
            <p>{siteConfig.streetLine1}</p>
            <p>{siteConfig.streetLine2}</p>
            <p>{siteConfig.cityState}</p>
            <a href={siteConfig.phoneHref} className="block transition hover:text-white">{siteConfig.phoneDisplay}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.practiceName}. All rights reserved.</p>
          <p>This website does not provide medical advice. Call 911 for emergencies.</p>
        </div>
      </div>
    </footer>
  );
}
