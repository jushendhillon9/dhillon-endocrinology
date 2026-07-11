"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { navigation, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-serif text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            {siteConfig.shortDoctorName}
          </span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            {siteConfig.specialty}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${active ? "text-teal-800" : "text-slate-600 hover:text-slate-950"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950">
            <PhoneIcon className="h-4 w-4" />
            Call office
          </a>
          <Link href={siteConfig.appointmentUrl} className="button-primary">
            Request an appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="page-shell flex flex-col py-5" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-slate-100 py-3 text-base font-medium ${pathname === item.href ? "text-teal-800" : "text-slate-700"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href={siteConfig.appointmentUrl} onClick={() => setOpen(false)} className="button-primary mt-5 justify-center">
              Request an appointment
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
