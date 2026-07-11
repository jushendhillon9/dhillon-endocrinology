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
  description: `Official practice information for ${siteConfig.doctorName}, endocrinology at ${siteConfig.practiceName} in ${siteConfig.cityState}.`,
  openGraph: {
    type: "website",
    title: `${siteConfig.doctorName} | ${siteConfig.specialty}`,
    description: `Official practice information for ${siteConfig.doctorName} at ${siteConfig.practiceName} in ${siteConfig.cityState}.`,
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: siteConfig.doctorName,
  medicalSpecialty: "Endocrinology",
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  image: `https://www.example.com${siteConfig.headshot}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: "Laguna Hills",
    addressRegion: "CA",
    postalCode: "92653",
    addressCountry: "US",
  },
  hospitalAffiliation: {
    "@type": "Hospital",
    name: siteConfig.hospitalAffiliation,
  },
  worksFor: {
    "@type": "MedicalBusiness",
    name: siteConfig.practiceName,
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
