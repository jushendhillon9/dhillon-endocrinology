import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig, siteUrl } from "@/lib/site";

const homeTitle = `${siteConfig.shortDoctorName}, MD | Endocrinologist in Laguna Hills, CA`;
const homeDescription = `Official website of ${siteConfig.doctorName}, endocrinologist at ${siteConfig.practiceName.replace(", Inc.", "")} in Laguna Hills, California. Current office location, phone number, and appointment information.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.shortDoctorName}, MD`,
  },
  description: homeDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${siteConfig.shortDoctorName}, MD`,
    locale: "en_US",
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: siteConfig.headshot,
        width: 1008,
        height: 1018,
        alt: `${siteConfig.shortDoctorName}, MD, endocrinologist in Laguna Hills, California`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [siteConfig.headshot],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/#physician`,
  name: siteConfig.doctorName,
  alternateName: siteConfig.shortDoctorName,
  honorificSuffix: "MD",
  medicalSpecialty: "Endocrinology",
  description: `${siteConfig.doctorName} is an endocrinologist practicing at ${siteConfig.practiceName} in Laguna Hills, California.`,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  image: `${siteUrl}${siteConfig.headshot}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.streetLine1}, ${siteConfig.streetLine2}`,
    addressLocality: "Laguna Hills",
    addressRegion: "CA",
    postalCode: "92653",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "MedicalBusiness",
    name: siteConfig.practiceName,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.streetLine1}, ${siteConfig.streetLine2}`,
      addressLocality: "Laguna Hills",
      addressRegion: "CA",
      postalCode: "92653",
      addressCountry: "US",
    },
  },
  memberOf: {
    "@type": "MedicalOrganization",
    name: siteConfig.practiceName,
  },
  hospitalAffiliation: {
    "@type": "Hospital",
    name: siteConfig.hospitalAffiliation,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Laguna Hills",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Vermont College of Medicine",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "UCLA Medical Center",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of California, Berkeley",
    },
  ],
  knowsLanguage: ["en", "es"],
  sameAs: siteConfig.profileLinks,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
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
