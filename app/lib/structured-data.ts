import { SITE, absoluteUrl, PAGES } from "./seo";

/* ──────────────────────────────────────────────────────────────────────────
   Structured data (Schema.org JSON-LD) builders.
   Powers rich results in Google AND answer extraction in AI/generative
   engines (AEO) - ChatGPT, Perplexity, Gemini, Google AI Overviews.
   ────────────────────────────────────────────────────────────────────────── */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

const contactPoints = [
  {
    "@type": "ContactPoint",
    contactType: "admissions",
    email: SITE.email,
    areaServed: "AU",
    availableLanguage: ["en"],
  },
  {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE.adminEmail,
    areaServed: "AU",
    availableLanguage: ["en"],
  },
];

/** Primary entity - a registered higher education provider. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absoluteUrl("/images/logo/main.png"),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    email: SITE.email,
    address: postalAddress,
    contactPoint: contactPoints,
    identifier: [
      { "@type": "PropertyValue", propertyID: "TEQSA Provider ID", value: SITE.teqsa },
      { "@type": "PropertyValue", propertyID: "CRICOS Provider Code", value: SITE.cricos },
      { "@type": "PropertyValue", propertyID: "ABN", value: SITE.abn },
    ],
    areaServed: "AU",
    knowsAbout: [
      "Information Technology",
      "Data Analytics",
      "Higher Education",
    ],
    sameAs: [] as string[], // add social/LinkedIn URLs when live
  };
}

/** The website entity (enables site name in search + ties pages together). */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-AU",
    publisher: { "@id": ORG_ID },
  };
}

/** The Bachelor of Information Technology degree. */
export function bitCourseLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl("/graduation-courses/#course"),
    name: "Bachelor of Information Technology (Data Analytics)",
    description:
      "A 3-year, AQF Level 7 bachelor degree specialising in Data Analytics. 240 credit points across 23 units, preparing graduates for data-driven careers in industry.",
    url: absoluteUrl("/graduation-courses"),
    provider: { "@id": ORG_ID },
    educationalCredentialAwarded: "Bachelor of Information Technology (AQF Level 7)",
    educationalLevel: "AQF Level 7",
    inLanguage: "en-AU",
    coursePrerequisites:
      "Successful completion of Australian Year 12 or equivalent; English language proficiency IELTS 6.5 (no band below 6.0) or equivalent.",
    timeRequired: "P3Y",
    numberOfCredits: 240,
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: { "@type": "Place", name: SITE.name, address: postalAddress },
        courseWorkload: "PT38H",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        category: "Domestic tuition (total)",
        price: "43200",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/fees-refunds-and-charges"),
      },
      {
        "@type": "Offer",
        category: "International tuition (total)",
        price: "50400",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/fees-refunds-and-charges"),
      },
    ],
  };
}

/** Breadcrumb trail. Pass [{ name, path? }] in order, root → current. */
export function breadcrumbLd(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

/** FAQ block - strong AEO signal; surfaces directly in AI answers & rich results. */
export function faqLd(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** A generic WebPage node bound to the org/site (helps entity disambiguation). */
export function webPageLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/** A breadcrumb crumb in the UI shape used by PageHero (label/href). */
export interface UiCrumb {
  label: string;
  href?: string;
}

/**
 * Convenience graph for a standard content page: a WebPage node (derived from
 * the central PAGES metadata) plus an optional BreadcrumbList built from the
 * exact crumbs already shown in the page hero. Keeps structured data in lockstep
 * with on-page content with a single line per page.
 */
export function pageGraphLd(path: string, crumbs?: UiCrumb[]) {
  const page = PAGES[path];
  const nodes: Record<string, unknown>[] = [];

  if (page) {
    nodes.push(
      webPageLd({
        path,
        name: `${page.title} | ${SITE.shortName}`,
        description: page.description,
      }),
    );
  }

  if (crumbs?.length) {
    // The final crumb (current page) carries no href, so breadcrumbLd omits its `item`.
    nodes.push(breadcrumbLd(crumbs.map((c) => ({ name: c.label, path: c.href }))));
  }

  return nodes;
}

/** Organization contact page with the postal address as a structured node. */
export function contactPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact")}#webpage`,
    url: absoluteUrl("/contact"),
    name: `Contact ${SITE.name}`,
    description: PAGES["/contact"]?.description,
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: {
      "@id": ORG_ID,
      "@type": ["CollegeOrUniversity", "EducationalOrganization"],
      name: SITE.name,
      email: SITE.email,
      address: postalAddress,
      contactPoint: contactPoints,
    },
  };
}

/**
 * An ItemList of courses/articles for a listing page - helps AI engines and
 * Google understand the collection and surface its members.
 */
export function itemListLd({
  path,
  name,
  items,
}: {
  path: string;
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#collection`,
    url: absoluteUrl(path),
    name,
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}
