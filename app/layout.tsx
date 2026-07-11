import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: `${siteConfig.doctorName} | ${siteConfig.specialty}`,
    template: `%s | ${siteConfig.shortDoctorName}`,
  },
  description: `Independent endocrinology care with ${siteConfig.doctorName} in ${siteConfig.cityState}.`,
  openGraph: {
    type: "website",
    title: `${siteConfig.doctorName} | ${siteConfig.specialty}`,
    description: `Independent endocrinology care in ${siteConfig.cityState}.`,
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: siteConfig.doctorName,
  medicalSpecialty: "Endocrinology",
  telephone: siteConfig.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.cityState,
    addressRegion: "CA",
    addressCountry: "US",
  },
  url: "https://www.example.com",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="physician-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
