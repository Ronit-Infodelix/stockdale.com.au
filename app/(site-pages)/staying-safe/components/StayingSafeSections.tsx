"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";

const TABS = [
  { label: "Campus Safety",          id: "campus-safety" },
  { label: "Policies and Support",   id: "policies-support" },
  { label: "How to Report Concerns", id: "how-to-report" },
  { label: "Reporting Procedures",   id: "reporting-procedures" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function StayingSafeSections() {
  const [activeId, setActiveId] = useState<TabId>("campus-safety");
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
      {/* ── Anchor tab bar ── */}
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

      {/* ── 1. Campus Safety ── */}
      <section id="campus-safety" className="scroll-mt-35">
        <SplitSection
          badge="Staying Safe"
          title="Campus safety"
          body={[]}
          image="/images/staying-safe/section.webp"
          imageAlt="Campus safety"
          imagePosition="right"
        >
          <ul className="list-disc pl-6 space-y-3 mb-0">
            {[
              "Emergency contact details are displayed across campus and available on the Stockdale website and LMS.",
              "First aid kits and trained first aid officers are available on campus.",
              "Security and incident reporting procedures are outlined in the Student Handbook.",
            ].map((item, i) => (
              <li key={i} className="font-sans text-[16px] leading-7 text-brand-gray pl-1">
                {item}
              </li>
            ))}
          </ul>
        </SplitSection>
      </section>

      {/* ── 2. Policies and Support ── */}
      <section id="policies-support" className="scroll-mt-35 bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Policies and support
          </h2>
          <ul className="list-disc pl-6 space-y-3 max-w-3xl">
            {[
              "Bullying, harassment, and discrimination are not tolerated. Stockdale has clear policies and complaint procedures.",
              "Sexual assault and sexual harassment support, including confidential referrals to external services.",
              "Emergency and crisis support contacts (police, ambulance, mental health crisis lines).",
            ].map((item, i) => (
              <li key={i} className="font-sans text-[16px] leading-[35px] text-brand-gray pl-1">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 3. How to Report Concerns ── */}
      <section id="how-to-report" className="scroll-mt-35 bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            How to report concerns
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="font-sans text-[16px] leading-[35px] text-black font-medium">
              If you experience or witness unsafe behaviour, harassment, or discrimination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {[
                "Contact a staff member, student services, or the Student Support team immediately.",
                "Submit a formal complaint via the Stockdale complaints and appeals process.",
                "Access external support services (police, counselling, legal support).",
              ].map((item, i) => (
                <li key={i} className="font-sans text-[16px] leading-[35px] text-brand-gray pl-1">{item}</li>
              ))}
            </ul>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              Report any health and safety concerns or hazards to appropriate staff members immediately.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              Report any suspicious online activity or cyber abuse immediately. This includes cyberstalking, trolling, fake accounts, online hate, and doxing.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              Report any incidents of sexual harassment, assault, or discrimination to Stockdale's Dean or CEO.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              <span className="font-medium text-black">Report Concerns: </span>
              If you encounter or witness any behaviour that you believe constitutes bullying, harassment, discrimination, or gender-based violence you are encouraged to report it. Stockdale has a zero-tolerance policy for such behaviour and reporting incidents helps ensure a safe learning environment for everyone.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. Reporting Procedures ── */}
      <section id="reporting-procedures" className="scroll-mt-35 bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Reporting Procedures
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              <span className="font-medium text-black">How to Report: </span>
              You can report any incidents of bullying, harassment, or discrimination to Stockdale through various channels. This includes: If you are in immediate danger, call Police on 000.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              <span className="font-medium text-black">Confidentiality: </span>
              All complaints are handled with confidentiality and respect. You can expect that your concerns will be addressed promptly and fairly, with the aim of resolving issues in a just manner.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              <span className="font-medium text-black">No Retaliation: </span>
              Stockdale does not tolerate any form of victimization or retaliation against those who report misconduct. You are protected when you come forward with concerns.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
