"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const TABS = [
  { label: "Eligibility for Admission",      id: "eligibility" },
  { label: "Diversity and Equity",           id: "diversity-equity" },
  { label: "Application",                    id: "application" },
  { label: "Offers and Rejections",          id: "offers-rejections" },
  { label: "Indicative Student Enrolments",  id: "student-enrolments" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const ELIGIBILITY_ITEMS = [
  "Satisfy all prerequisite requirements including the completion of Grade 12 or equivalent;",
  "Satisfy the English language proficiency level detailed on the course website;",
  "Satisfy any program specific criteria",
  "Satisfy any program specific criteria",
  "Satisfy any higher and/or additional requirements for a specific course, as published on Stockdale's website or in the online brochure.",
];

const APPLICATION_PARAS = [
  "Stockdale provides resources to enable those from historically disadvantaged groups the opportunity to apply for Admission into its courses of study, with special consideration given to the recruitment, admission, participation and completion of Aboriginal and Torres Strait Islander peoples.",
  "Receipt of all applications will be acknowledged via email to each applicant, stating that the application has been received and further documents for request may be forthcoming.",
  "Any requests for further documentation will be sent via email with a 5 working day time limit given for this to be provided;",
  "Stockdale will specify an approximate timeframe for the awarding of Offers of enrolment",
  "Stockdale will assess each application and all necessary supporting documents in accordance with the Student Admissions Policy, including evaluating the Applicant's likelihood of completion, evaluating assistance options where required, whether the Applicant is eligible for Recognition of Prior Learning and whether the Applicant meets the Genuine Temporary Entrant Criteria (if an International Student Applicant).",
  "Stockdale retains the authority to verify the authenticity of documents provided with an Application. Additionally, applicants may be asked to present the original versions of the submitted documents during orientation for further verification.",
];

const OFFERS_PARAS = [
  "On receipt of an Application and following the review of same, the Student Administration team will update the Student database with the details of the Applicant and their Application outcome, write the Letter of Offer and Agreement, or a Rejection Letter to the applicant.",
  "The Letter of Offer must contain the details of the course, its location and starting dates, details of fees that are required from the student, a Student Agreement contract form that is clear and concise outlining the student's rights and responsibilities, along with access to policies regarding deferral or withdrawal. They are also informed of conditions regarding any changes to their enrolment, or deferral and of tuition protections and any refund of charges if applicable.",
  "Notification of Rejection – Where an Applicant has been rejected, they are informed in writing of the reasons why, and if any alternatives are possible. The applicant is also given the method of appealing a decision in line with the Student Complaints and Appeals Policy and Procedure.",
  "Conditional Offers – When the applicant is given an Offer with conditions, they are informed in writing of the conditions. These conditions usually involve requirements to provide additional information, but do not affect the Admission status.",
];

type CaseTab = "base" | "sensitised";

const ENROLMENT_DATA: Record<CaseTab, { international: string; domestic: string }> = {
  base: {
    international: "40 Enrolments (20 in Semester 1 and 20 in Semester 2)",
    domestic: "2 Enrolments (1 in Semester 1 and 1 in Semester 2)",
  },
  sensitised: {
    international: "25 Enrolments (12 in Semester 1 and 13 in Semester 2)",
    domestic: "1 Enrolment (0 in Semester 1 and 1 in Semester 2)",
  },
};

export default function AdmissionSections() {
  const [activeId, setActiveId] = useState<TabId>("eligibility");
  const [caseTab, setCaseTab] = useState<CaseTab>("base");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ratios: Record<string, number> = {};
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { ratios[e.target.id] = e.intersectionRatio; });
        const top = Object.entries(ratios).sort(([, a], [, b]) => b - a)[0];
        if (top && top[1] > 0) setActiveId(top[0] as TabId);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) },
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div>
      {/* ── Sticky tab bar ── */}
      <div className="sticky top-18 z-40 bg-brand-green-darkest">
        <Container className="flex flex-wrap">
          {TABS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={[
                "px-5 py-[18px] text-[12px] font-sans font-bold uppercase tracking-[0.96px] whitespace-nowrap transition-colors duration-150",
                activeId === id
                  ? "bg-brand-green-light text-brand-green-darkest"
                  : "text-white hover:bg-brand-green-light/30 hover:text-white",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </Container>
        {/* Quick action bar */}
      <div className="bg-white border-b border-gray-100 py-4">
        <Container className="flex flex-wrap items-center justify-end gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-green-darkest text-[14px] font-sans text-black hover:bg-brand-green-light/10 transition-colors"
          >
            How to Apply
            <ChevronRight size={13} strokeWidth={2} />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-brand-green-darkest text-[14px] font-sans text-black hover:bg-brand-green-light/10 transition-colors"
          >
            Fee and Refunds
            <ChevronRight size={13} strokeWidth={2} />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-[14px] font-sans hover:opacity-90 transition-opacity"
            style={{
              background:
                "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
            }}
          >
            Apply Now
            <ChevronRight size={13} strokeWidth={2} />
          </Link>
        </Container>
      </div>
      </div>

      {/* ── 1. Eligibility for Admission ── */}
      <section id="eligibility" className="scroll-mt-[140px] bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — numbered list */}
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
                Eligibility for Admission
              </h2>
              <p className="font-sans text-[16px] leading-7 text-brand-gray mb-6">
                To be eligible for Admission to a course, an Applicant must:
              </p>
              <ol className="space-y-4">
                {ELIGIBILITY_ITEMS.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-sans text-[16px] leading-6 text-black font-medium shrink-0 w-5 text-right">
                      {i + 1}.
                    </span>
                    <p className="font-sans text-[16px] leading-6 text-black">{item}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/admission/section.webp"
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Diversity and Equity ── */}
      <section id="diversity-equity" className="scroll-mt-[140px]">
        <SplitSection
          badge="Admission"
          title="Diversity and Equity in the Admission process"
          body={[
            "Stockdale does not discriminate on the grounds of religion, race, sex, disability or any other basis. Stockdale considers the Applicant's demonstrated academic ability that is relevant to the course requirements for which they are applying.",
            "Stockdale provides resources to enable those from historically disadvantaged groups the opportunity to apply for Admission into its courses of study, with special consideration given to the recruitment, admission, participation and completion of Aboriginal and Torres Strait Islander peoples.",
          ]}
          image="/images/admission/section-2.webp"
          imageAlt="Diverse students"
          imagePosition="left"
        />
      </section>

      {/* ── 3. Application ── */}
      <section id="application" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Application
          </h2>
          <div className="max-w-3xl space-y-5">
            {APPLICATION_PARAS.map((para, i) => (
              <p key={i} className="font-sans text-[16px] leading-7 text-brand-gray">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Offers and Rejections ── */}
      <section id="offers-rejections" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Offers and Rejections
          </h2>
          <div className="max-w-3xl space-y-5">
            {OFFERS_PARAS.map((para, i) => (
              <p key={i} className="font-sans text-[16px] leading-7 text-brand-gray">
                {para}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Indicative Student Enrolments ── */}
      <section id="student-enrolments" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8 max-w-2xl">
            Indicative Student Enrolments 2026 — Bachelor of Information Technology
          </h2>

          {/* Case tabs */}
          <div className="border-b border-black mb-0">
            <div className="flex gap-6">
              {(["base", "sensitised"] as const).map((tab) => {
                const isActive = caseTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setCaseTab(tab)}
                    className={[
                      "font-sans font-medium text-[14px] uppercase tracking-wide px-2 py-2 transition-colors duration-150",
                      isActive ? "text-brand-gold-dark" : "text-black hover:text-brand-gold-dark",
                    ].join(" ")}
                  >
                    {tab === "base" ? "Base Case:" : "Sensitised Case:"}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Active tab gold underline */}
          <div
            className="h-1.5 bg-brand-gold-dark mb-8 transition-all duration-200"
            style={{ width: caseTab === "base" ? "88px" : "128px" }}
          />

          <div className="space-y-6 max-w-xl">
            <div>
              <p className="font-sans font-bold text-[14px] text-black leading-8">International Students:</p>
              <p className="font-sans text-[14px] text-brand-gray leading-8">
                {ENROLMENT_DATA[caseTab].international}
              </p>
            </div>
            <div>
              <p className="font-sans font-bold text-[14px] text-black leading-8">Domestic Students:</p>
              <p className="font-sans text-[14px] text-brand-gray leading-8">
                {ENROLMENT_DATA[caseTab].domestic}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
