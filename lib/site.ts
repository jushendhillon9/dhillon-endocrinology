const streetLine1 = "24221 Calle de la Louisa";
const streetLine2 = "Third Floor, Suite 300";
const cityState = "Laguna Hills, CA 92653";

export const siteConfig = {
  doctorName: "Kimvir S. Dhillon, MD",
  shortDoctorName: "Dr. Kimvir Dhillon",
  specialty: "Endocrinology",
  practiceName: "Saddleback Medical Group, Inc.",
  hospitalAffiliation: "Saddleback Memorial Medical Center",
  cityState,
  streetLine1,
  streetLine2,
  streetAddress: `${streetLine1}, ${streetLine2}`,
  fullAddress: `${streetLine1}, ${streetLine2}, ${cityState}`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${streetLine1}, ${streetLine2}, ${cityState}`,
  )}`,
  phoneDisplay: "(949) 465-8145",
  phoneHref: "tel:+19494658145",
  headshot: "/assets/Dr.Dhillon-Headshot.png",
  appointmentUrl: "/contact",
  openingStatus: "Now seeing patients at Saddleback Medical Group in Laguna Hills",
  currentPracticeNote:
    "Dr. Kimvir Dhillon is now seeing patients at Saddleback Medical Group in Laguna Hills.",
  previousPracticeNote:
    "Dr. Dhillon is no longer practicing at his previous Optum location. Please use the address and phone number shown on this website for his current practice information.",
  lastUpdated: "July 2026",
  conditions: [
    "Diabetes management",
    "Thyroid disorders",
    "Thyroid nodules",
    "Pituitary disorders and tumors",
    "Adrenal disorders and tumors",
    "Parathyroid disorders",
  ],
  physicianQuote:
    "Endocrinology is an extremely challenging field due to the diversity of diseases. I chose to focus my medical career in endocrinology because it is one of the few medical specialties where disorders can be effectively treated or cured to significantly improve or prolong the lives of patients.",
  bio: [
    "Dr. Kimvir Dhillon completed his training in internal medicine at UCLA Medical Center and went on to specialize in endocrinology at UCLA Medical Center. During his endocrinology fellowship, Dr. Dhillon received extensive clinical training from leaders in the field, with particular interests in thyroid disease, pituitary disease, adrenal tumors, and diabetes.",
    "His research experience included diabetes management, thyroid disorders, parathyroid disorders, and pituitary tumors. He also received extensive training in thyroid ultrasound and ultrasound-guided thyroid biopsy.",
    "Dr. Dhillon grew up in Southern California and lives in South Orange County with his wife and children. He enjoys cycling and running in his free time.",
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      detail: "B.A. in Molecular and Cell Biology/Neurobiology",
      year: "1994",
    },
    {
      institution: "University of Vermont College of Medicine",
      detail: "M.D.",
      year: "1998",
    },
  ],
  training: [
    {
      institution: "University of California, Los Angeles",
      detail: "Internship and Residency",
      year: "1998–2001",
    },
    {
      institution: "University of California, Los Angeles",
      detail: "Fellowship in Endocrinology",
      year: "2001–2003",
    },
  ],
  boardCertifications: [
    { name: "Diplomate, American Board of Internal Medicine", year: "2001" },
    { name: "American Board of Endocrinology", year: "2003" },
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
