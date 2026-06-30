import type { Metadata } from "next";

/* ──────────────────────────────────────────────────────────────────────────
   Central SEO / GEO / AEO configuration
   Single source of truth for canonical URL, brand facts, Open Graph defaults
   and every page's meta title / description / keywords.

   Change CANONICAL ONCE here and it propagates to canonical tags, Open Graph,
   Twitter cards, the sitemap, robots.txt, the web manifest and llms.txt.
   ────────────────────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Stockdale Higher Education Institute",
  shortName: "Stockdale Institute",
  legalName: "Stockdale Higher Education Institute",
  /** Canonical production origin - no trailing slash. */
  url: "https://stockdaleinstitute.edu.au",
  domain: "stockdaleinstitute.edu.au",
  locale: "en_AU",
  /** Default social share image (resolved against metadataBase). */
  ogImage: "/images/home/hero/banner.webp",
  twitter: "@StockdaleInst",
  description:
    "Stockdale Higher Education Institute is a TEQSA-registered Australian higher education provider in West Melbourne, delivering the Bachelor of Information Technology (Data Analytics) to domestic and international students.",
  // Regulatory / contact facts (kept compliant for a new provider).
  teqsa: "PRV14409",
  cricos: "04467K",
  abn: "30 657 190 193",
  email: "admissions@stockdale.edu.au",
  adminEmail: "admin@stockdale.edu.au",
  phone: "", // TBA - no public number supplied yet
  address: {
    street: "Level 2, 120 Miller Street",
    locality: "West Melbourne",
    region: "VIC",
    postalCode: "3003",
    country: "AU",
  },
  foundingYear: "2026",
} as const;

export interface PageSeo {
  /** Short title - the brand suffix is appended by the layout template. */
  title: string;
  description: string;
  keywords: string[];
  /** Absolute path, e.g. "/about-us". */
  path: string;
  /** Page-specific share image; falls back to SITE.ogImage. */
  ogImage?: string;
  /** Set true for login / gated pages that must not be indexed. */
  noindex?: boolean;
}

/* ──────────────────────────────────────────────────────────────────────────
   Per-page metadata. Keys are route paths.
   ────────────────────────────────────────────────────────────────────────── */

export const PAGES: Record<string, PageSeo> = {
  "/": {
    title: "Stockdale Higher Education Institute | Study IT in Melbourne",
    description:
      "Stockdale Higher Education Institute is a TEQSA-registered Melbourne provider offering the Bachelor of Information Technology (Data Analytics). Apply to study IT in Australia - domestic & international students welcome.",
    keywords: [
      "Stockdale Higher Education Institute",
      "higher education Melbourne",
      "Bachelor of Information Technology Melbourne",
      "study IT in Australia",
      "data analytics degree Melbourne",
      "TEQSA registered provider",
      "international students Melbourne",
      "IT college West Melbourne",
    ],
    path: "/",
    ogImage: "/images/home/hero/banner.webp",
  },

  "/about-us": {
    title: "About Stockdale Institute",
    description:
      "Learn about Stockdale Higher Education Institute - a TEQSA-registered Australian higher education provider in West Melbourne committed to rigorous, industry-relevant qualifications, academic freedom and student success.",
    keywords: [
      "about Stockdale Institute",
      "TEQSA registered higher education provider",
      "Australian higher education West Melbourne",
      "Stockdale mission vision values",
      "academic freedom Australia",
    ],
    path: "/about-us",
    ogImage: "/images/about/hero.webp",
  },

  "/graduation-courses": {
    title: "Courses & Degrees",
    description:
      "Explore higher education courses at Stockdale Institute, Melbourne. Industry-relevant, TEQSA-registered qualifications including the Bachelor of Information Technology (Data Analytics) for domestic and international students.",
    keywords: [
      "courses Melbourne",
      "higher education courses Australia",
      "Stockdale Institute courses",
      "Bachelor of Information Technology",
      "degrees West Melbourne",
    ],
    path: "/graduation-courses",
    ogImage: "/images/graduation/hero.webp",
  },

  "/admission": {
    title: "Admissions",
    description:
      "Admissions at Stockdale Institute, Melbourne - entry requirements, English language standards, intakes and application steps for the Bachelor of Information Technology. Guidance for domestic and international applicants.",
    keywords: [
      "Stockdale admissions",
      "university admission Melbourne",
      "IT degree entry requirements",
      "how to enrol Melbourne college",
      "international student admission Australia",
    ],
    path: "/admission",
    ogImage: "/images/admission/hero.webp",
  },

  "/how-to-apply": {
    title: "How to Apply",
    description:
      "How to apply to Stockdale Institute step by step - entry requirements, English language requirements (IELTS 6.5), intake dates and the application process for domestic and international students in Melbourne.",
    keywords: [
      "how to apply Stockdale Institute",
      "apply for IT degree Melbourne",
      "university application Australia",
      "international student application process",
      "course intakes Melbourne",
      "IELTS 6.5 entry requirement",
    ],
    path: "/how-to-apply",
    ogImage: "/images/how-to-apply/hero.webp",
  },

  "/graduation-courses/bachelor-of-information-technology/domestic": {
    title: "Bachelor of Information Technology - Domestic Students",
    description:
      "Information for domestic students applying to the Bachelor of Information Technology at Stockdale Institute, Melbourne - entry requirements, fees, application steps and support for Australian and New Zealand citizens and permanent residents.",
    keywords: [
      "domestic students Melbourne",
      "Australian student IT degree",
      "domestic admission requirements",
      "study IT Melbourne local students",
    ],
    path: "/graduation-courses/bachelor-of-information-technology/domestic",
    ogImage: "/images/domestic/hero.webp",
  },

  "/graduation-courses/bachelor-of-information-technology/international": {
    title: "Bachelor of Information Technology - International Students",
    description:
      "International student guide to the Bachelor of Information Technology at Stockdale Institute, Melbourne - CRICOS-registered course, English requirements, student visa pathways and support for studying in Australia. CRICOS 04467K.",
    keywords: [
      "international students Melbourne",
      "study in Australia international students",
      "CRICOS registered course Melbourne",
      "student visa Australia IT degree",
      "international IT degree Melbourne",
      "English requirements study Australia",
    ],
    path: "/graduation-courses/bachelor-of-information-technology/international",
    ogImage: "/images/international/hero.webp",
  },

  "/fees-refunds-and-charges": {
    title: "Fees, Refunds & Charges",
    description:
      "Tuition fees, refunds and charges at Stockdale Institute, Melbourne. Bachelor of Information Technology fees - domestic $43,200 and international $50,400 - plus refund policy and payment information.",
    keywords: [
      "IT degree fees Melbourne",
      "tuition fees Australia international students",
      "Stockdale Institute fees",
      "course refund policy Australia",
      "Bachelor of Information Technology cost",
    ],
    path: "/fees-refunds-and-charges",
    ogImage: "/images/fee/hero.webp",
  },

  "/scholarships": {
    title: "Scholarships",
    description:
      "Scholarships at Stockdale Institute, Melbourne - financial support for ambitious domestic and international students studying the Bachelor of Information Technology. Find out who can apply and how.",
    keywords: [
      "scholarships Melbourne",
      "IT degree scholarships Australia",
      "international student scholarships Melbourne",
      "higher education financial support",
      "Stockdale scholarships",
    ],
    path: "/scholarships",
    ogImage: "/images/home/gallery/students-celebrating.webp",
  },

  "/credit-and-rpl": {
    title: "Credit & Recognition of Prior Learning (RPL)",
    description:
      "Apply for course credit and Recognition of Prior Learning (RPL) at Stockdale Institute, Melbourne. Use prior study and work experience toward your Bachelor of Information Technology and finish sooner.",
    keywords: [
      "credit transfer Melbourne",
      "recognition of prior learning Australia",
      "RPL IT degree",
      "advanced standing university Melbourne",
      "course credit Australia",
    ],
    path: "/credit-and-rpl",
    ogImage: "/images/crl/hero.webp",
  },

  "/graduate-attributes": {
    title: "Graduate Attributes",
    description:
      "The graduate attributes Stockdale Institute develops in every student - knowledge, critical thinking, communication, ethics and professional capability that prepare graduates for industry and society.",
    keywords: [
      "graduate attributes",
      "graduate capabilities Australia",
      "employability skills IT degree",
      "Stockdale graduate outcomes",
    ],
    path: "/graduate-attributes",
    ogImage: "/images/graduate/hero.webp",
  },

  "/learning-and-teaching": {
    title: "Learning & Teaching",
    description:
      "Discover the learning and teaching approach at Stockdale Institute, Melbourne - employment-connected, work-integrated learning that blends academic rigour with real-world industry experience.",
    keywords: [
      "learning and teaching approach",
      "work-integrated learning Melbourne",
      "employment-connected education",
      "industry relevant teaching Australia",
      "applied learning IT degree",
    ],
    path: "/learning-and-teaching",
    ogImage: "/images/learning/hero.webp",
  },

  "/industry": {
    title: "Industry & Partners",
    description:
      "Stockdale Institute's industry engagement in Melbourne - building connections between students and employers through work-integrated learning, projects and professional networks in the technology sector.",
    keywords: [
      "industry engagement Melbourne",
      "IT industry partners Australia",
      "work integrated learning technology",
      "employer connections IT degree",
    ],
    path: "/industry",
    ogImage: "/images/indrustry/hero.webp",
  },

  "/partners": {
    title: "Partners",
    description:
      "Stockdale Institute partners with education agents and organisations to support student recruitment and success. Learn about partnering with our Melbourne higher education provider.",
    keywords: [
      "education agents Melbourne",
      "Stockdale Institute partners",
      "study agent Australia",
      "higher education partnerships",
    ],
    path: "/partners",
    ogImage: "/images/partner/hero.webp",
  },

  "/our-campus": {
    title: "Our Campus",
    description:
      "Explore the Stockdale Institute campus at Level 2, 120 Miller Street, West Melbourne - modern facilities, learning spaces and technology in the heart of Melbourne, Australia.",
    keywords: [
      "Stockdale campus West Melbourne",
      "college campus Melbourne",
      "study facilities Melbourne CBD",
      "Miller Street West Melbourne campus",
    ],
    path: "/our-campus",
    ogImage: "/images/campus/hero.webp",
  },

  "/melbourne-life": {
    title: "Life in Melbourne",
    description:
      "Discover student life in Melbourne - Australia's most liveable student city. Explore culture, transport, accommodation, work and lifestyle for students at Stockdale Institute.",
    keywords: [
      "student life Melbourne",
      "study in Melbourne",
      "living in Melbourne international students",
      "Melbourne student city Australia",
      "student accommodation Melbourne",
    ],
    path: "/melbourne-life",
    ogImage: "/images/melbourne/hero.webp",
  },

  "/library-and-databases": {
    title: "Library & Databases",
    description:
      "Stockdale Institute library and online databases - research resources, e-journals and academic support for students studying the Bachelor of Information Technology in Melbourne.",
    keywords: [
      "Stockdale library",
      "academic databases Australia",
      "research resources Melbourne college",
      "online library higher education",
    ],
    path: "/library-and-databases",
    ogImage: "/images/library/hero.webp",
  },

  "/student-handbook": {
    title: "Student Handbook",
    description:
      "The Stockdale Institute student handbook - essential information on enrolment, assessment, academic policies, support services and your rights and responsibilities as a student in Melbourne.",
    keywords: [
      "student handbook",
      "academic policies Australia",
      "student services Melbourne",
      "Stockdale student guide",
    ],
    path: "/student-handbook",
    ogImage: "/images/handbook/hero.webp",
  },

  "/staying-safe": {
    title: "Staying Safe",
    description:
      "Health, safety and wellbeing information for Stockdale Institute students in Melbourne - emergency contacts, support services, and guidance to help you stay safe on and off campus.",
    keywords: [
      "student safety Melbourne",
      "student wellbeing support Australia",
      "international student safety",
      "campus safety Melbourne",
    ],
    path: "/staying-safe",
    ogImage: "/images/staying-safe/hero.webp",
  },

  "/policies-and-procedures": {
    title: "Policies & Procedures",
    description:
      "Access Stockdale Institute's governance policies and procedures - admissions, academic integrity, student support, complaints and appeals, in line with the TEQSA Higher Education Standards Framework.",
    keywords: [
      "higher education policies",
      "academic integrity policy Australia",
      "student complaints appeals",
      "TEQSA standards compliance",
      "Stockdale policies procedures",
    ],
    path: "/policies-and-procedures",
    ogImage: "/images/policies-and-procedures/hero.webp",
  },

  "/news-and-events": {
    title: "News & Events",
    description:
      "The latest news, announcements and events from Stockdale Institute, Melbourne - stay up to date with what's happening at our higher education community.",
    keywords: [
      "Stockdale news events",
      "college news Melbourne",
      "higher education events Australia",
      "student events Melbourne",
    ],
    path: "/news-and-events",
    ogImage: "/images/news/hero.webp",
  },

  "/blogs": {
    title: "Blogs",
    description:
      "Insights, guides and articles from Stockdale Higher Education Institute, Melbourne - study tips, careers in data analytics, life in Melbourne, and advice for domestic and international students.",
    keywords: [
      "Stockdale blog",
      "study tips Australia",
      "data analytics careers",
      "study in Melbourne guide",
      "international student blog Melbourne",
      "higher education insights",
    ],
    path: "/blogs",
    ogImage: "/images/home/students-campus.webp",
  },

  "/contact": {
    title: "Contact Us",
    description:
      "Contact Stockdale Higher Education Institute - Level 2, 120 Miller Street, West Melbourne VIC 3003. Email admissions@stockdale.edu.au for course, admissions and general enquiries.",
    keywords: [
      "contact Stockdale Institute",
      "Stockdale Institute address Melbourne",
      "higher education enquiry Melbourne",
      "West Melbourne college contact",
    ],
    path: "/contact",
    ogImage: "/images/contact/hero.webp",
  },

  "/student-login": {
    title: "Student Login",
    description:
      "Student portal login for Stockdale Institute students.",
    keywords: [],
    path: "/student-login",
    noindex: true,
  },

  "/agent-login": {
    title: "Agent Login",
    description:
      "Education agent portal login for Stockdale Institute partners.",
    keywords: [],
    path: "/agent-login",
    noindex: true,
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   Metadata builder - call from any page: `export const metadata = pageMetadata("/about-us")`
   ────────────────────────────────────────────────────────────────────────── */

export function pageMetadata(path: string): Metadata {
  const page = PAGES[path];
  if (!page) {
    throw new Error(`pageMetadata: no SEO entry for "${path}". Add it to PAGES in app/lib/seo.ts.`);
  }

  const isHome = path === "/";
  const ogImage = page.ogImage ?? SITE.ogImage;
  // Home keeps its absolute title; inner pages inherit the "%s | Stockdale Institute" template.
  const title = isHome ? { absolute: page.title } : page.title;

  return {
    title,
    description: page.description,
    keywords: page.keywords.length ? page.keywords : undefined,
    alternates: { canonical: page.path },
    robots: page.noindex
      ? { index: false, follow: false, nocache: true }
      : undefined,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: page.path,
      title: isHome ? page.title : `${page.title} | ${SITE.shortName}`,
      description: page.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? page.title : `${page.title} | ${SITE.shortName}`,
      description: page.description,
      images: [ogImage],
      site: SITE.twitter,
      creator: SITE.twitter,
    },
  };
}

/** Absolute URL helper. */
export function absoluteUrl(path = "/"): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
