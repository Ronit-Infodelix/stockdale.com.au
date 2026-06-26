"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

const TABS = [
  { label: "Integrated study, work and support", id: "integrated" },
  { label: "Our Learning Approach",             id: "learning-approach" },
  { label: "Applied Professional Practice",     id: "applied" },
  { label: "Your Student Journey",              id: "journey" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const LEARNING_ROWS = [
  {
    title: "Applied and relevant",
    body: "You combine theory with real-world application, working on projects and challenges drawn from industry.",
    bg: "bg-[#f9f9f9]",
  },
  {
    title: "Portfolio-based assessment",
    body: "Your assessments create real outputs — reports, code, dashboards, and presentations — that you can use in job applications.",
    bg: "bg-[#efefef]",
  },
  {
    title: "Collaborative and supportive",
    body: "You learn in small cohorts, with accessible academic staff, peer learning, and support to help you succeed.",
    bg: "bg-[#f9f9f9]",
  },
  {
    title: "Flexible and stackable",
    body: "You can build on your existing experience through credit and Recognition of Prior Learning (RPL), with pathways that can be adapted around work where appropriate.",
    bg: "bg-[#efefef]",
  },
];

const JOURNEY_STEPS = [
  {
    n: 1,
    title: "Enquiry and application",
    body: "Explore programs, speak with our team, and apply (directly or via an education agent).",
  },
  {
    n: 2,
    title: "Enrolment and orientation",
    body: "Receive your offer, complete enrolment, and participate in orientation to prepare for study and work.",
  },
  {
    n: 3,
    title: "Integrated learning and work",
    body: "Study on campus, engage with real employer challenges, and build capability through structured professional experience.",
  },
  {
    n: 4,
    title: "Graduation and career launch",
    body: "Graduate with a recognised qualification, a professional portfolio, and clear pathways into employment.",
  },
  {
    n: 5,
    title: "Alumni and ongoing support",
    body: "Access career services, mentorship, and professional development for up to 12 months post-graduation.",
  },
];

const RESOURCES = [
  "Canvas – Unit materials, assessments, announcements, and online collaboration tools",
  "Library – On-campus and online access to core textbooks, eBooks, journals, academic databases, and study spaces",
  "Academic skills support – Workshops and one-on-one support for writing, research, critical thinking, and presentation skills",
];

export default function LearningTabs() {
  const [activeId, setActiveId] = useState<TabId>("integrated");
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
      </div>

      {/* Breadcrumb row */}
      <div className="bg-[#fafafa] border-b border-gray-100 py-4">
        <Container>
          <nav className="flex items-center gap-1 font-sans text-[14px]">
            <Link href="/" className="text-black hover:underline">Home</Link>
            <ChevronRight size={12} className="text-brand-gray" />
            <Link href="/admission" className="text-black hover:underline">Admission</Link>
            <ChevronRight size={12} className="text-brand-gray" />
            <span className="text-brand-gray">Learning and Teaching</span>
          </nav>
        </Container>
      </div>

      {/* ── Section 1: Integrated study, work and support ── */}
      <section id="integrated" className="scroll-mt-[140px] bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
                Integrated study, work and support
              </h2>
              <div className="space-y-5 font-sans text-[16px] leading-7 text-brand-gray">
                <p>
                  Stockdale&apos;s model unites learning, work experience, and support in one
                  integrated pathway.
                </p>
                <p>
                  Instead of studying first and working later, you build capability while you learn,
                  through real projects, real workplaces, ongoing personal, academic and employment
                  support.
                </p>
                <p>
                  This integrated approach helps you move into meaningful work faster, becoming
                  productive in 6–9 months rather than the traditional 18–24 months.
                </p>
              </div>
            </div>

            {/* Right: masked image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
                alt="Diverse group of students studying"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Our Learning Approach ── */}
      <section id="learning-approach" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-2">
            Our Learning Approach
          </h2>
          <p className="font-sans text-[24px] leading-7 text-brand-gray mb-8">
            Learning at Stockdale is:
          </p>

          <div>
            {LEARNING_ROWS.map(({ title, body, bg }) => (
              <div key={title} className={`${bg} px-8 py-7`}>
                <p className="font-sans font-bold text-[16px] leading-7 text-black">{title}</p>
                <p className="font-sans text-[16px] leading-7 text-brand-gray">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 3: Applied Professional Practice ── */}
      <section id="applied" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Applied Professional Practice
          </h2>
          <div className="max-w-3xl space-y-5 font-sans text-[16px] leading-7 text-brand-gray">
            <p>
              Rather than treating work experience as an optional add-on, Stockdale&apos;s model
              expects students to engage in applied projects drawn from industry contexts and, where
              possible, undertake structured professional experience or in-role learning that can be
              assessed for credit (subject to TEQSA and AQF requirements).
            </p>
            <p>
              This reduces the gap between study and professional readiness, helping you transition
              into meaningful work more quickly and confidently.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Section 4: Your Student Journey ── */}
      <section id="journey" className="scroll-mt-[140px] bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Your Student Journey
          </h2>

          <div className="max-w-3xl space-y-6 mb-16">
            {JOURNEY_STEPS.map(({ n, title, body }) => (
              <div key={n}>
                <p className="font-sans text-[16px] leading-7 text-black">
                  <span className="font-medium">{n}. {title}</span>
                </p>
                <p className="font-sans text-[16px] leading-7 text-brand-gray">{body}</p>
              </div>
            ))}
          </div>

          {/* Learning Resources sub-section */}
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
            Learning Resources
          </h2>
          <ul className="list-disc pl-6 space-y-2 max-w-3xl">
            {RESOURCES.map((item) => (
              <li key={item} className="font-sans text-[16px] leading-[35px] text-brand-gray">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
