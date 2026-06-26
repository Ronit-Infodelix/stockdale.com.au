"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Container from "@/app/components/ui/Container";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const COURSE_META = [
  [
    { label: "Course Title and Awards", value: "Bachelor of Information Technology" },
    { label: "Level of Study", value: "Bachelor level AQF 7" },
    { label: "Duration", value: "3 years Full time (Part Time options available)" },
  ],
  [
    { label: "Exit Points", value: "Not Applicable" },
    { label: "Location", value: "Level 2, 120 Miller Street, West Melbourne VIC 3003" },
    { label: "Student Full-Time Workload", value: "4 units each semester – 8 units per year" },
  ],
  [
    { label: "Field of Education", value: "02 (Information Technology)" },
    { label: "Credit Points Required for Completion", value: "240" },
    {
      label: "Fees",
      value: "$43,200 (Domestic students)\n$50,400 (International students)",
    },
  ],
];

const OVERVIEW_PANELS = [
  {
    title: "IT Core Units",
    body: "A set of mandatory units that cover the fundamental competencies for an emerging IT professional. This covers the technical such as database management, networking and information security, web & cloud systems, programming and systems analysis and design. It also covers a series of units that scaffold the development of professional skills including project management. The ultimate IT Core unit is the Capstone Project that draws together technical (both Core and Depth) and professional skills in a project involving the analysis of and solution synthesis for a complex industry-relevant problem.",
  },
  {
    title: "Data Analytics Specialisation",
    body: "In this specialisation, students will develop expertise in data visualization and communication as well as data analytics techniques including data mining, machine learning, predictive modeling, and statistical analysis. These skills are vital for extracting valuable insights from large datasets and making data-driven decisions.",
  },
  {
    title: "IT Electives",
    body: "Second year electives include eCommerce and digital business models, and digital marketing and analytics, fostering a holistic understanding of contemporary digital trends and third year electives in human-computer interaction and artificial intelligence in business ensure that graduates are not only proficient in technical skills but also prepared for leadership roles in various technological domains.",
  },
];

type UnitTab = "core" | "specialisation" | "elective";

const UNITS: Record<UnitTab, { code: string; name: string }[]> = {
  core: [
    { code: "BIT101", name: "IT Professional Skills" },
    { code: "BIT102", name: "Database Management Systems" },
    { code: "BIT103", name: "Networking Fundamentals" },
    { code: "BIT104", name: "Information Security" },
    { code: "BIT105", name: "Web & Cloud Systems" },
    { code: "BIT106", name: "Programming Fundamentals" },
    { code: "BIT107", name: "Systems Analysis & Design" },
    { code: "BIT108", name: "Project Management in IT" },
    { code: "BIT109", name: "Software Engineering" },
    { code: "BIT110", name: "IT Ethics & Society" },
    { code: "BIT499", name: "Capstone Project" },
  ],
  specialisation: [
    { code: "BDA201", name: "Data Visualisation & Communication" },
    { code: "BDA202", name: "Statistical Analysis Methods" },
    { code: "BDA203", name: "Data Mining Techniques" },
    { code: "BDA204", name: "Machine Learning Fundamentals" },
    { code: "BDA205", name: "Predictive Modelling" },
    { code: "BDA206", name: "Big Data Analytics" },
    { code: "BDA207", name: "Business Intelligence Systems" },
    { code: "BDA208", name: "Applied Data Science Project" },
  ],
  elective: [
    { code: "BEL301", name: "eCommerce & Digital Business Models" },
    { code: "BEL302", name: "Digital Marketing & Analytics" },
    { code: "BEL303", name: "Human-Computer Interaction" },
    { code: "BEL304", name: "Artificial Intelligence in Business" },
  ],
};

type EntryTab = "domestic" | "international";

const ENTRY: Record<EntryTab, { requirements: string[]; bullets: string[] }> = {
  domestic: {
    requirements: [
      "In accordance with TIA's Admissions Policy and Procedure, the following minimum entry thresholds have been assigned for entry to this course. The institution has defined certain minimum entry requirements that applicants must meet to gain admission to this course. These thresholds are designed to ensure that students enrolling in the program have the necessary qualifications and skills to succeed in their studies.",
    ],
    bullets: [
      "Must be above 18 years of age",
      "Completion of year 12 in Australia",
      "Successful completion of year 10 mathematics subject (or equivalent)",
      "School leavers should have successfully completed VCE (or equivalent)",
      "Access to a laptop device during studies at TIA.",
    ],
  },
  international: {
    requirements: [
      "In accordance with TIA's Admissions Policy and Procedure, the following minimum entry thresholds have been assigned for entry to this course. International students must also meet English language requirements in addition to the academic entry requirements listed for domestic students.",
    ],
    bullets: [
      "Must be above 18 years of age",
      "Completion of a qualification equivalent to Australian Year 12",
      "Successful completion of year 10 mathematics (or equivalent)",
      "IELTS Academic: 6.5 overall (no band below 6.0)",
      "Access to a laptop device during studies at TIA.",
    ],
  },
};

/* ─── Tabs config ─────────────────────────────────────────────────────────── */

const TABS = [
  { id: "key-features", label: "Key Features" },
  { id: "course-overview", label: "Course Overview" },
  { id: "course-structure", label: "Course Structure" },
  { id: "core-units", label: "Core Units" },
  { id: "entry-requirements", label: "Entry Requirement & Admissions" },
];

/* ─── Green button ────────────────────────────────────────────────────────── */
function GreenBtn({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-sans font-medium uppercase tracking-[0.78px] hover:opacity-90 transition-opacity"
      style={{ background: "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)" }}
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

function OutlinedBtn({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest bg-white text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
    >
      {label}
      <ChevronRight size={12} strokeWidth={2} />
    </Link>
  );
}

/* ─── Accordion section wrapper ──────────────────────────────────────────── */
function AccordionSection({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div id={id} className="scroll-mt-20">
      <div className="border-t border-gray-200 pt-8 mb-6">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-4 text-left group"
        >
          <h2 className="font-agatho text-[40px] leading-[44px] text-[#0a0a0a]">{heading}</h2>
          <span className="mt-1 shrink-0 text-brand-gray group-hover:text-brand-green-darkest transition-colors">
            {open ? <Minus size={20} /> : <Plus size={20} />}
          </span>
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function BITContent() {
  const [activeTab, setActiveTab] = useState("key-features");
  const [unitTab, setUnitTab] = useState<UnitTab>("core");
  const [entryTab, setEntryTab] = useState<EntryTab>("domestic");

  /* Scroll-spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveTab(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
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
      <div className="sticky top-0 z-30 bg-brand-green-darkest overflow-x-auto">
        <Container>
          <div className="flex items-stretch">
            {TABS.map(({ id, label }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-5 py-5 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.96px] transition-colors whitespace-nowrap ${
                    active ? "bg-brand-green-light text-brand-green-darkest" : "text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── Breadcrumb / action bar ── */}
      <div className="bg-[#fafafa] border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <nav className="flex items-center gap-1 font-sans text-[14px]">
              <Link href="/" className="text-black hover:underline">Home</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <Link href="/graduation-courses" className="text-black hover:underline">Admission</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-brand-gray">Graduate Course</span>
            </nav>
            <div className="flex items-center gap-3">
              <GreenBtn label="Apply Now" href="/how-to-apply" />
              <OutlinedBtn label="How to Apply" href="/how-to-apply" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Section 1: Key Features ── */}
      <section id="key-features" className="bg-[#f8f5eb] py-14 scroll-mt-20">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[44px] text-[#0a0a0a] mb-8">
            Key Features
          </h2>
          <div className="divide-y divide-gray-200">
            {COURSE_META.map((row, ri) => (
              <div key={ri} className="grid grid-cols-3 gap-8 py-7">
                {row.map((cell) => (
                  <div key={cell.label}>
                    <p className="font-sans text-[12px] font-normal text-brand-gray uppercase tracking-wider mb-2">
                      {cell.label}
                    </p>
                    <p className="font-sans text-[18px] text-[#0a0a0a] leading-[26px] whitespace-pre-line">
                      {cell.value}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 2: Course Overview ── */}
      <section id="course-overview" className="bg-white py-14 scroll-mt-20">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[44px] text-[#0a0a0a] mb-4">
            Course Overview
          </h2>
          <div className="max-w-[720px] space-y-3 font-sans text-[14px] leading-[20px] text-brand-gray mb-10">
            <p>
              The course structure is designed to provide a robust foundation in Information
              Technology while allowing students to specialise and tailor their education to their
              professional objectives. Ethics and soft skills are established in the IT Professional
              unit and are further developed and exercised throughout the units across the course.
            </p>
            <p>The BIT structure includes:</p>
          </div>

          {/* Expandable overview panels */}
          <div className="max-w-[900px] space-y-4">
            {OVERVIEW_PANELS.map((panel) => (
              <OverviewPanel key={panel.title} title={panel.title} body={panel.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 3: Course Structure ── */}
      <section id="course-structure" className="bg-white py-14 scroll-mt-20">
        <Container>
          <div className="max-w-[720px]">
            <AccordionSection id="course-structure-inner" heading="Course Structure">
              <div className="font-sans text-[14px] leading-[20px] text-brand-gray space-y-3 mb-6">
                <p>
                  To qualify for award of the Bachelor of Information Technology the student shall
                  accrue an aggregate of 240 credit points.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The Bachelor IT consists of{" "}
                    <strong className="text-[#0a0a0a] text-[16px]">23 units</strong>, including{" "}
                    <strong className="text-[#0a0a0a]">11 core units</strong>,{" "}
                    <strong className="text-[#0a0a0a]">8 data analytics</strong> specialisation
                    units and the{" "}
                    <strong className="text-[#0a0a0a]">4 compulsory elective units</strong>.
                  </li>
                  <li>
                    <strong className="text-[#0a0a0a]">11 Core Units</strong>{" "}
                    (10 core units = 10 credit points each, Capstone Project = 20 credit points)
                  </li>
                  <li>
                    <strong className="text-[#0a0a0a]">8 Data Analytics</strong> Specialisation
                    Units (10 credit points each)
                  </li>
                  <li>
                    <strong className="text-[#0a0a0a]">4 Elective Units</strong> (10 credit points
                    each)
                  </li>
                  <li>
                    Total: <strong className="text-[#0a0a0a]">23 units</strong> (240 credit points)
                  </li>
                </ul>
              </div>
            </AccordionSection>
          </div>
        </Container>
      </section>

      {/* ── Section 4: Core Units (tabbed table) ── */}
      <section id="core-units" className="bg-white py-14 scroll-mt-20">
        <Container>
          <div className="max-w-[720px]">
            {/* Sub-tab bar */}
            <div className="flex items-center border-b border-black mb-6">
              {(
                [
                  { key: "core", label: "Core Units" },
                  { key: "specialisation", label: "Specialisation Units" },
                  { key: "elective", label: "Elective Units" },
                ] as { key: UnitTab; label: string }[]
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setUnitTab(key)}
                  className="relative px-3 py-2 font-sans text-[13px] font-medium uppercase tracking-wide mr-4"
                >
                  {label}
                  {unitTab === key && (
                    <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#e5bd1b]" />
                  )}
                </button>
              ))}
            </div>

            {/* Unit table */}
            <div className="rounded-lg overflow-hidden">
              {UNITS[unitTab].map((unit, i) => (
                <div
                  key={unit.code}
                  className={`flex items-center gap-6 px-6 py-3 ${
                    i % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#f9f9f9]"
                  }`}
                >
                  <span className="font-sans text-[13px] font-medium text-[#014f3d] uppercase w-20 shrink-0">
                    {unit.code}
                  </span>
                  <span className="font-sans text-[13px] text-[#0a0a0a] uppercase">
                    {unit.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 5: Entry Requirement & Admissions ── */}
      <section id="entry-requirements" className="bg-white py-14 scroll-mt-20">
        <Container>
          <div className="max-w-[720px]">
            <AccordionSection
              id="entry-inner"
              heading="Entry Requirement & Admissions Criteria"
            >
              <p className="font-sans text-[14px] leading-[20px] text-brand-gray mb-6">
                In accordance with TIA&apos;s Admissions Policy and Procedure, the following
                minimum entry thresholds have been assigned for entry to this course. The
                institution has defined certain minimum entry requirements that applicants must
                meet to gain admission to this course.
              </p>

              {/* Domestic / International tabs */}
              <div className="flex items-center border-b border-black mb-6">
                {(
                  [
                    { key: "domestic", label: "Domestic Students" },
                    { key: "international", label: "International Students" },
                  ] as { key: EntryTab; label: string }[]
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setEntryTab(key)}
                    className="relative px-3 py-2 font-sans text-[13px] font-medium uppercase tracking-wide mr-4"
                  >
                    {label}
                    {entryTab === key && (
                      <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#e5bd1b]" />
                    )}
                  </button>
                ))}
              </div>

              <h3 className="font-agatho text-[24px] text-[#014f3d] mb-4">Entry Requirements</h3>
              <p className="font-sans text-[14px] leading-[20px] text-brand-gray mb-4">
                {ENTRY[entryTab].requirements[0]}
              </p>
              <ul className="list-disc pl-5 space-y-2 font-sans text-[14px] leading-[30px] text-brand-gray">
                {ENTRY[entryTab].bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </AccordionSection>
          </div>
        </Container>
      </section>

      {/* ── Pathways to Further Learning ── */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(160deg, #fff4c9 21.926%, #f0c41a 78.074%)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-5">
              <h2 className="font-agatho text-[50px] leading-[58px] text-[#050505]">
                Pathways to further learning
              </h2>
              <p className="font-sans text-[16px] leading-[24px] text-[#050505]">
                Upon completion of BIT course, graduates can undertake further learning.
              </p>
              <div className="font-sans text-[16px] leading-[24px] text-white space-y-1">
                <p>These pathways typically include</p>
                <p>• Master of Information Technology (Master of IT) programs,</p>
                <p>• Graduate Certificate (Grad Cert) programs and</p>
                <p>• Graduate Diploma (Grad Dip) programs.</p>
              </div>
              <div className="font-sans text-[16px] leading-[24px] text-[#050505] space-y-1 pt-2">
                <p>Student should refer to the course seeker and compare ED websites.</p>
                <p>• https://www.courseseeker.edu.au/</p>
                <p>• https://www.compared.edu.au/</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <OutlinedBtn label="How to Apply" href="/how-to-apply" />
                <OutlinedBtn label="Handbook" href="#" />
              </div>
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png"
                alt="Graduates celebrating"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/* ─── Overview panel (internal) ─────────────────────────────────────────── */
function OverviewPanel({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-[#cdeae2]/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-sans text-[20px] text-[#0a0a0a]">{title}:</span>
        {open ? (
          <Minus size={18} className="text-brand-gray shrink-0" />
        ) : (
          <Plus size={18} className="text-brand-gray shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-sans text-[14px] leading-[24px] text-brand-gray">{body}</p>
        </div>
      )}
    </div>
  );
}
