"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

/* ─── Types ──────────────────────────────────────────────────────────────── */
export type StudentVariant = "domestic" | "international";

/* ─── Config ─────────────────────────────────────────────────────────────── */
const CONFIG: Record<
  StudentVariant,
  {
    breadcrumbLabel: string;
    entryHeading: string;
    entrySubheading: string;
    entryItems: string[];
    secondHeading: string;
    secondPreamble: string;
    secondItems: string[];
    applyLabel: string;
    additionalSection?: { heading: string; body: string };
  }
> = {
  domestic: {
    breadcrumbLabel: "Domestic Student",
    entryHeading: "Entry Requirements",
    entrySubheading: "For the Master of Information Technology:",
    entryItems: [
      "A Bachelor's degree (AQF 7 or higher) in any discipline from a recognised institution; OR",
      "A Graduate Diploma (AQF 8 or equivalent) in a relevant subject area; OR",
      "At least five years of relevant professional IT experience, supported by your resume and references.",
    ],
    secondHeading: "Standard Admission Requirements",
    secondPreamble: "To qualify for admission, you must meet one of the following:",
    secondItems: [
      "Provide verified identity and proof of citizenship or permanent residency.",
      "Submit required documents (certified academic transcripts, degree certificate, resume, references).",
      "Pay the application fee.",
    ],
    applyLabel: "Apply Now as a Domestic Student",
  },
  international: {
    breadcrumbLabel: "International Student",
    entryHeading: "Entry Requirements",
    entrySubheading: "For the Master of Information Technology:",
    entryItems: [
      "A Bachelor's degree (AQF 7 or higher) in any discipline from a recognised institution; OR",
      "A Graduate Diploma (AQF 8 or equivalent) in a relevant subject area; OR",
      "At least five years of relevant professional experience, supported by a résumé and references.",
    ],
    secondHeading: "English Language Requirements",
    secondPreamble: "You must demonstrate one of the following:",
    secondItems: [
      "IELTS Academic: 6.5 overall (no band below 6.0)",
      "TOEFL iBT: 80 overall (min. 21 in writing)",
      "PTE Academic: 58 overall (min. 50 in each skill)",
      "Cambridge CAE: 176 overall (min. 169 each subskill)",
    ],
    applyLabel: "Apply Now as an International Student",
    additionalSection: {
      heading: "Additional Entry Requirements",
      body: "International applicants must also submit a Genuine Student (GS) statement for visa purposes.",
    },
  },
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function GreenButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-sans font-medium uppercase tracking-[0.78px] hover:opacity-90 transition-opacity"
      style={{
        background:
          "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
      }}
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

function OutlinedButton({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function StudentRequirementsContent({ variant }: { variant: StudentVariant }) {
  const cfg = CONFIG[variant];

  return (
    <>
      {/* ── Sub-hero action bar ── */}
      <div className="bg-[#fafafa] border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Breadcrumb text */}
            <nav className="font-sans text-[14px] flex items-center gap-1">
              <Link href="/" className="text-black hover:underline">Home</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <Link href="/how-to-apply" className="text-black hover:underline">Admission</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-brand-gray">{cfg.breadcrumbLabel}</span>
            </nav>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <GreenButton label="Apply Now" href="/how-to-apply" />
              <OutlinedButton label="How to Apply" href="/how-to-apply" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Section 1: Entry Requirements — text left, image right ── */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="flex flex-col gap-3">
              <p className="font-sans text-[18px] leading-[28px] text-[#0a0a0a]">
                {cfg.entrySubheading}
              </p>
              <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a]">
                {cfg.entryHeading}
              </h2>
              <div className="font-sans text-[16px] leading-[28px]">
                <p className="font-medium text-[#0a0a0a] mb-2">
                  To qualify for admission, you must meet one of the following:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-brand-gray">
                  {cfg.entryItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/domestic/section.webp"
                alt="Students at Stockdale"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Second requirements — image left, text right ── */}
      <section className="bg-[#f9f9f9] py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/domestic/section-2.webp"
                alt={cfg.secondHeading}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right: text */}
            <div className="flex flex-col gap-3 lg:pt-2">
              <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a]">
                {cfg.secondHeading}
              </h2>
              <div className="font-sans text-[16px] leading-[28px]">
                <p className="font-medium text-[#0a0a0a] mb-2">{cfg.secondPreamble}</p>
                <ul className="list-disc pl-5 space-y-1 text-brand-gray">
                  {cfg.secondItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <GreenButton label={cfg.applyLabel} href="/how-to-apply" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 3 (international only): Additional Entry Requirements ── */}
      {cfg.additionalSection && (
        <section className="bg-white py-12">
          <Container>
            <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-3">
              {cfg.additionalSection.heading}
            </h2>
            <p className="font-sans text-[16px] leading-[28px] text-brand-gray max-w-2xl">
              {cfg.additionalSection.body}
            </p>
          </Container>
        </section>
      )}
    </>
  );
}
