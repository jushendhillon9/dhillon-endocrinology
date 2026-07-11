export const siteConfig = {
  doctorName: "Kimvir Dhillon, MD",
  shortDoctorName: "Dr. Dhillon",
  specialty: "Endocrinology",
  practiceName: "Kimvir Dhillon, MD — Endocrinology",
  cityState: "[City, California]",
  streetAddress: "[New practice street address]",
  phoneDisplay: "[Practice phone]",
  phoneHref: "tel:+10000000000",
  fax: "[Practice fax]",
  email: "[Practice email]",
  appointmentUrl: "/contact",
  openingStatus: "Now accepting appointment inquiries",
  previousPracticeNote:
    "Dr. Dhillon is now seeing patients independently and is no longer practicing at his previous Optum location.",
  lastUpdated: "July 2026",
  hours: [
    ["Monday–Thursday", "[Hours]"],
    ["Friday", "[Hours]"],
    ["Saturday–Sunday", "Closed"],
  ],
  conditions: [
    "Diabetes and glucose management",
    "Thyroid disorders",
    "Osteoporosis and bone health",
    "Pituitary and adrenal disorders",
    "Calcium and parathyroid disorders",
    "Hormonal and metabolic conditions",
  ],
  values: [
    {
      title: "Thoughtful, individualized care",
      body: "Care plans are built around the whole patient—not only a laboratory value or diagnosis.",
    },
    {
      title: "Clear explanations",
      body: "Complex endocrine conditions are explained in practical language so patients can make informed decisions.",
    },
    {
      title: "Long-term partnership",
      body: "Endocrine care often unfolds over time. The goal is steady progress, careful monitoring, and continuity.",
    },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
] as const;
