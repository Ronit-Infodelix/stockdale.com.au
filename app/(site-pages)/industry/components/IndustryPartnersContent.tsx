"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Plus, Minus } from "lucide-react";
import Container from "@/app/components/ui/Container";

/* ─── Types ──────────────────────────────────────────────────────────────── */
export type IndustryVariant = "partners" | "industry";

/* ─── CONFIG ──────────────────────────────────────────────────────────────── */
const CONFIG = {
  partners: {
    breadcrumbLabel: "Partners",
    breadcrumbHref: "/partners",
    parentHref: "/industry",
    parentLabel: "Industry & Partners",
  },
  industry: {
    breadcrumbLabel: "Industry",
    breadcrumbHref: "/industry",
    parentHref: "/industry",
    parentLabel: "Industry & Partners",
  },
};

/* ─── Shared Tab Bar Tabs ─────────────────────────────────────────────────── */
const PARTNER_TABS = [
  { id: "partners-intro", label: "Partners" },
  { id: "student-sources", label: "Student Sources" },
  { id: "what-we-offer", label: "What We Offer Partners" },
];

const INDUSTRY_TABS = [
  { id: "employer-pathways", label: "Employer Pathways" },
  { id: "how-it-works", label: "How It Works" },
];

/* ─── Buttons ─────────────────────────────────────────────────────────────── */
function GreenBtn({ label, href = "#" }: { label: string; href?: string }) {
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

/* ─── Accordion ──────────────────────────────────────────────────────────── */
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
    <section id={id} className="scroll-mt-20">
      <div className="border-t border-gray-200 mb-6" />
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

/* ─── Partners content ───────────────────────────────────────────────────── */
function PartnersContent() {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="max-w-[780px] space-y-12">

          {/* Intro */}
          <section id="partners-intro" className="scroll-mt-20 pt-4">
            <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-4">
              Partners
            </h2>
            <p className="font-sans text-[16px] leading-[28px] text-brand-gray mb-5">
              Note: Partnership applications opening mid-2026. Contact us at{" "}
              <a href="mailto:admin@heau.edu.au" className="underline text-brand-green-darkest hover:opacity-75">
                admin@heau.edu.au
              </a>{" "}
              for more information.
            </p>
            <p className="font-sans text-[16px] leading-[28px] font-medium text-[#0a0a0a] mb-2">
              Building pathways through partnership
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              HEA brings together student sources and professional readiness partners to create
              end-to-end pathways from learning to work.
            </p>
          </section>

          {/* Student Sources */}
          <AccordionSection id="student-sources" heading="Student sources">
            <ul className="list-disc pl-6 space-y-1 font-sans text-[16px] leading-[35px] text-brand-gray mb-8">
              <li>International education agents</li>
              <li>VET and pathway providers</li>
              <li>Employers (existing staff as learners)</li>
              <li>Social impact organisations</li>
              <li>Industry and professional bodies</li>
            </ul>

            <div className="space-y-4 font-sans text-[16px] leading-[35px]">
              <div>
                <p className="font-medium text-[#0a0a0a]">1. Social impact organisations</p>
                <p className="text-brand-gray">
                  Provide supported work environments for learners not yet ready for commercial
                  or corporate settings. Build confidence, capability, and foundational workplace
                  skills.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#0a0a0a]">2. SMEs</p>
                <p className="text-brand-gray">
                  Offer first commercial roles with broad exposure to how a business operates,
                  with hands-on experience in dynamic, fast-moving environments.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0a0a0a]">3. Large corporates</p>
                <p className="text-brand-gray">
                  Provide structured roles and custom cohorts that align to workforce capability
                  needs and create clear professional pathways.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#0a0a0a]">4. Government agencies</p>
                <p className="text-brand-gray">
                  Offer structured roles in public sector and digital transformation contexts,
                  with clear links to policy and workforce priorities.
                </p>
              </div>
              <div>
                <p className="font-medium text-[#0a0a0a]">Progression pathway:</p>
                <p className="text-brand-gray">
                  Learners move from supported to more complex environments as capability and
                  confidence grow, shortening the path to stable, meaningful employment.
                </p>
              </div>
            </div>
          </AccordionSection>

          {/* What We Offer Partners */}
          <AccordionSection id="what-we-offer" heading="What We Offer Partners">
            <div className="space-y-6 font-sans text-[16px] leading-[35px] text-brand-gray">
              {/* Employers */}
              <div>
                <p className="font-medium text-[#0a0a0a] mb-1">
                  For employers and professional readiness partners:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Co-designed curricula and pathways aligned to your needs</li>
                  <li>
                    Options for employer-funded cohorts, custom degree streams, and microcredentials
                  </li>
                  <li>
                    Transparent data and reporting on learner capability, progress, and outcomes
                  </li>
                </ul>
              </div>

              {/* Education providers */}
              <div>
                <p className="font-medium text-[#0a0a0a] mb-1">
                  For education providers and agents:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Clear, credit-mapped pathways from vocational/capability programs into HEA degrees
                  </li>
                  <li>
                    Co-branded, employment-linked offers you can market to students and employers
                  </li>
                  <li>
                    Transparent outcomes data to support student counselling and decision-making
                  </li>
                  <li>
                    Long-term partnership approach with co-marketing support and ethical recruitment
                    standards
                  </li>
                </ul>
              </div>

              {/* Social impact */}
              <div>
                <p className="font-medium text-[#0a0a0a] mb-1">
                  For social impact organisations:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Structured, supported professional experience placements with clear learning
                    outcomes and credit
                  </li>
                  <li>Pre- and co-training to prepare learners for hosting</li>
                  <li>
                    Support for placement coordination and learner wrap-around services
                  </li>
                  <li>Reportable outcomes data for funders and stakeholders</li>
                </ul>
              </div>
            </div>
          </AccordionSection>

        </div>
      </Container>
    </div>
  );
}

/* ─── Industry content ───────────────────────────────────────────────────── */
function IndustryContent() {
  return (
    <div className="bg-white py-12">
      <Container>
        <div className="max-w-[780px] space-y-12">

          {/* Employer Pathways intro */}
          <section id="employer-pathways" className="scroll-mt-20 pt-4">
            <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-4">
              Employer Pathways
            </h2>
            <p className="font-sans text-[16px] leading-[28px] font-medium text-[#0a0a0a] mb-2">
              Building pathways through partnership
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              Stockdale brings together student sources and professional readiness partners to
              create end-to-end pathways from learning to work.
            </p>
          </section>

          {/* How it works */}
          <section id="how-it-works" className="scroll-mt-20">
            <div className="border-t border-gray-200 mb-6" />
            <h2 className="font-agatho text-[40px] leading-[50px] text-[#0a0a0a] mb-6">
              How it works
            </h2>
            <div className="space-y-6 font-sans text-[16px] leading-[28px]">

              <div>
                <p className="font-medium text-[#0a0a0a] mb-2">Attract</p>
                <ul className="list-disc pl-6 space-y-1 text-brand-gray">
                  <li>
                    Co-designed employment-linked pathways as part of your employee value
                    proposition (EVP).
                  </li>
                  <li>
                    Offer prospective hires clear development and progression opportunities from
                    day one.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#0a0a0a] mb-2">Develop</p>
                <ul className="list-disc pl-6 space-y-1 text-brand-gray">
                  <li>
                    Sponsor staff into Stockdale programs with flexible, work-compatible delivery.
                  </li>
                  <li>
                    Co-design custom degree streams or micro-credentials aligned to your capability
                    frameworks.
                  </li>
                  <li>
                    In-role projects and work-based learning are assessed for credit, so learning
                    and productivity happen together.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#0a0a0a] mb-2">Retain</p>
                <ul className="list-disc pl-6 space-y-1 text-brand-gray">
                  <li>
                    Provide meaningful career progression tied to recognised qualifications.
                  </li>
                  <li>
                    Track and measure outcomes: capability development, internal mobility,
                    retention, and productivity gains.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#0a0a0a] mb-2">What you&apos;ll gain:</p>
                <ul className="list-disc pl-6 space-y-1 text-brand-gray">
                  <li>Shorter time-to-productivity and lower onboarding costs.</li>
                  <li>Stronger internal capability and reduced reliance on external hiring.</li>
                  <li>Transparent reporting and data on learner outcomes.</li>
                  <li>Co-creation rights: help shape curriculum, assessment, and pathways.</li>
                </ul>
              </div>

            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────────────────── */
export default function IndustryPartnersContent({
  variant,
}: {
  variant: IndustryVariant;
}) {
  const cfg = CONFIG[variant];
  const tabs = variant === "partners" ? PARTNER_TABS : INDUSTRY_TABS;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [tabs]);

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
            {tabs.map(({ id, label }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`px-6 py-5 shrink-0 font-sans text-[11px] font-bold uppercase tracking-[0.96px] transition-colors whitespace-nowrap ${
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

      {/* ── Breadcrumb / action bar ── */}
      <div className="bg-[#fafafa] border-b border-gray-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <nav className="flex items-center gap-1 font-sans text-[14px]">
              <Link href="/" className="text-black hover:underline">Home</Link>
              <ChevronRight size={12} className="text-gray-400" />
              <Link href={cfg.parentHref} className="text-black hover:underline">
                {cfg.parentLabel}
              </Link>
              <ChevronRight size={12} className="text-gray-400" />
              <span className="text-brand-gray">{cfg.breadcrumbLabel}</span>
            </nav>
            <div className="flex items-center gap-3">
              <GreenBtn label="Apply Now" href="/how-to-apply" />
              <OutlinedBtn label="How to Apply" href="/how-to-apply" />
            </div>
          </div>
        </Container>
      </div>

      {/* ── Page-specific content ── */}
      {variant === "partners" ? <PartnersContent /> : <IndustryContent />}
    </>
  );
}
