"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Container from "@/app/components/ui/Container";

/* ─── Tab / Section config ───────────────────────────────────────────────── */
const TABS = [
  { id: "eligibility", label: "Eligibility to Apply" },
  { id: "evidence", label: "Evidence of Informal Learning" },
  { id: "assessment", label: "Assessment of Applications" },
  { id: "time-limits", label: "Time Limits & Restrictions" },
  { id: "withdrawing", label: "Withdrawing Credit" },
  { id: "appeals", label: "Appeals & Complaints" },
];

/* ─── Reusable numbered list ────────────────────────────────────────────── */
function NumberedList({
  items,
  nested,
}: {
  items: (string | { text: string; subItems?: string[] })[];
  nested?: boolean;
}) {
  return (
    <ol className={`list-decimal ${nested ? "pl-6" : "pl-5"} space-y-3 text-brand-gray font-sans text-[16px] leading-[28px]`}>
      {items.map((item, i) => {
        if (typeof item === "string") {
          return <li key={i}>{item}</li>;
        }
        return (
          <li key={i}>
            {item.text}
            {item.subItems && (
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {item.subItems.map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ─── Accordion policy section ───────────────────────────────────────────── */
function PolicySection({
  id,
  heading,
  children,
  defaultOpen = true,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="scroll-mt-24">
      {/* Divider */}
      <div className="border-t border-gray-200 mb-8" />
      {/* Heading row */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] max-w-[640px]">
          {heading}
        </h2>
        <span className="mt-2 shrink-0 text-brand-gray group-hover:text-brand-green-darkest transition-colors">
          {open ? <Minus size={22} /> : <Plus size={22} />}
        </span>
      </button>
      {open && <div className="mt-6">{children}</div>}
    </section>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function RPLContent() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Scroll-spy via IntersectionObserver */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveTab(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  return (
    <>
      {/* ── Sticky tab bar ── */}
      <div className="sticky top-18 z-40 bg-brand-green-darkest overflow-x-auto">
        <Container>
          <div className="flex items-stretch">
            {TABS.map(({ id, label }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-5 py-5 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.96px] transition-colors whitespace-nowrap ${
                    active
                      ? "bg-brand-green-light text-brand-green-darkest"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Breadcrumb strip ── */}
      <div className="bg-[#fafafa] border-b border-gray-100">
        <Container>
          <nav className="flex items-center gap-1 py-4 font-sans text-[14px]">
            <Link href="/" className="text-black hover:underline">Home</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link href="/how-to-apply" className="text-black hover:underline">Admission</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-brand-gray">Credit & RPL</span>
          </nav>
        </Container>
      </div>

      {/* ── Section 1: Eligibility to apply ── */}
      <section id="eligibility" className="bg-[#e6f5f1] py-16 scroll-mt-24">
        <Container>
          {/* 2-col intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Text */}
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-4">
                Eligibility to apply
              </h2>
              <div className="space-y-4 font-sans text-[16px] leading-[28px] text-brand-gray">
                <p>
                  Both Domestic and international Students who have relevant prior learning for
                  which Credit may be granted are eligible to apply for Credit in accordance with
                  this Policy. Prospective students who wish to enrol may also apply.
                </p>
                <p>
                  International Students need to submit their application for Credit before
                  Admission. Credit will be dependent upon the conditions of their Student Visa.
                  While the Student may themselves be eligible for Credit, it is not a guarantee
                  that they will be given credit (See Assessment below).
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/crl/section.webp"
                alt="Students studying at Stockdale"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* How to Apply continuation */}
          <div className="max-w-200 space-y-4 font-sans text-[16px] leading-[28px] text-brand-gray">
            <p>
              Students will be informed that if their application for credit is successful they
              will not be disadvantaged in achieving the expected course learning outcomes.
            </p>
            <p>All students must use the Credit Application Form when applying.</p>
            <p>
              International students may request assessment of Credit when applying, providing
              evidence that can be assessed against AQF standards and qualifications.
            </p>

            <div className="pt-2">
              <p className="font-medium text-[#0a0a0a] mb-3">
                The following documents must be submitted when applying for Credit transfer:
              </p>
              <NumberedList
                items={[
                  "Official academic transcripts indicating all courses completed, grades and year of completions;",
                  "Unit profiles and outlines and Course Learning Outcomes and assessment for the subjects completed;",
                  "All transcripts must show the logo of the institution where the study occurred;",
                  "AQF Qualification issued by the accrediting institution for Domestic Students; and",
                  "International Students must provide a qualification that has been issued in accordance with the Australian Government's Country Education Profiles (CEP).",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Accordion sections ── */}
      <div className="bg-white py-12">
        <Container>
          <div className="max-w-200 space-y-10">

            {/* Evidence of Informal or Non-Formal Learning */}
            <PolicySection
              id="evidence"
              heading="Evidence of Informal or Non-Formal learning may include but is not limited to"
            >
              <NumberedList
                items={[
                  "Student's CV;",
                  "References and letters from employers demonstrating roles they have held in professional or industry work",
                  "Documents outlining their roles and performance reviews;",
                  "Any short courses undertaken and certificates;",
                  "Tangible outputs such as publications, portfolios of work aligned to the position description; and",
                  "All documents must be provided in English and certified.",
                ]}
              />
            </PolicySection>

            {/* Assessment of Credit transfer applications */}
            <PolicySection
              id="assessment"
              heading="Assessment of Credit transfer applications"
            >
              <NumberedList
                items={[
                  "Once an application is received, all applications are assessed by Student Administration delegated to deal with Admission applications and RPL and Credit requests. Students will be informed that the result of their application will be given to them in writing within twenty one (21) business days.",
                  "Assessment for RPL may be more complex due to the variable nature of learning and a thorough check if it matches standards set out in the AQF.",
                  "A recommendation will be made to the Course Coordinator who will decide the application including the amount of Credit to be awarded.",
                  "All decisions must be recorded including reasons for any non-approval. Students are to be given written advice of the outcome of their application. The decision will be kept on the Students' relevant records.",
                ]}
              />
            </PolicySection>

            {/* Time limits */}
            <PolicySection
              id="time-limits"
              heading="Time limits and Restrictions on the amount of Credit"
            >
              <NumberedList
                items={[
                  "Once an application is received, all applications are assessed by Student Administration delegated to deal with Admission applications and RPL and Credit requests. Students will be informed that the result of their application will be given to them in writing within twenty one (21) business days.",
                  "Assessment for RPL may be more complex due to the variable nature of learning and a thorough check if it matches standards set out in the AQF.",
                  "A recommendation will be made to the Course Coordinator who will decide the application including the amount of Credit to be awarded.",
                  "All decisions must be recorded including reasons for any non-approval. Students are to be given written advice of the outcome of their application. The decision will be kept on the Students' relevant records.",
                ]}
              />
            </PolicySection>

            {/* Withdrawing Credit */}
            <PolicySection id="withdrawing" heading="Withdrawing Credit for Prior Learning">
              <NumberedList
                items={[
                  "Any decision to revoke Credit previously granted must be provided in writing and include a justification of reasons for the decision and be approved by the Dean or delegated authority.",
                  "All decisions must be recorded, including the reasons for withdrawal of Credit so Students can be notified and the decision retained in the relevant records.",
                ]}
              />
            </PolicySection>

            {/* Appeals and Complaints */}
            <PolicySection id="appeals" heading="Appeals and Complaints">
              <NumberedList
                items={[
                  "Students may Appeal a decision made in accordance with Student Complaints and Appeals Policy. The matter must be resolved as quickly as possible so as not affect student enrolment and/or withdrawal from Units.",
                  {
                    text: "A Student may request a review on the acknowledgement that they will provide evidence on the following grounds:",
                    subItems: [
                      "The credit application was submitted in the relevant time frame, in the correct manner and all documentation was provided; and",
                      "The application provided requirements of relevance, compatibility, and equivalence in the following:",
                    ],
                  },
                ]}
              />

              {/* Info box */}
              <div className="mt-8 bg-[#f8f5eb] rounded-xl p-6 space-y-3 font-sans text-[16px] leading-[35px] text-brand-gray">
                <p>
                  Applications for review must be submitted within 10 working days of receiving
                  notice of the original decision and be sent by email and include their full
                  name, student number and their reason for Appeal and why they consider the
                  initial decision to be unreasonable.
                </p>
                <p>
                  The student will be notified of the outcome, and all relevant information
                  outlined above will be recorded.
                </p>
              </div>
            </PolicySection>

          </div>
        </Container>
      </div>
    </>
  );
}
