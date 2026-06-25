"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/app/components/ui/Container";
import SplitSection from "@/app/components/shared/SplitSection";

const TABS = [
  { label: "Living and studying in Melbourne",         id: "living" },
  { label: "What makes Melbourne great for students",  id: "great-for-students" },
  { label: "Cost of living",                           id: "cost-of-living" },
  { label: "Work opportunities",                       id: "work-opportunities" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const GRID_IMAGES = [
  "/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png",
  "/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png",
  "/images/home/students.png",
  "/images/home/students-empowering.png",
];

export default function MelbourneSections() {
  const [activeId, setActiveId] = useState<TabId>("living");
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

      {/* ── 1. Living and studying in Melbourne ── */}
      <section id="living" className="scroll-mt-35">
        <SplitSection
          badge="Melbourne Life"
          title="Living and studying in Melbourne"
          body={[
            "Melbourne offers a vibrant, multicultural environment where you can study, work, and build your future.",
            "As a major business and education hub, it provides access to diverse communities, cultural experiences, and real career opportunities alongside your studies.",
          ]}
          image="/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png"
          imageAlt="Melbourne city"
          imagePosition="right"
        />
      </section>

      {/* ── 2. What makes Melbourne great for students ── */}
      <section id="great-for-students" className="scroll-mt-35 bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: 2×2 image grid */}
            <div className="grid grid-cols-2 gap-4">
              {GRID_IMAGES.map((src, i) => (
                <div key={i} className="relative aspect-4/3 rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Right: title + bullet list */}
            <div>
              <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
                What makes Melbourne great for students
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                {[
                  "World-class universities and education providers",
                  "Diverse, multicultural communities and cuisines",
                  "Rich arts, music, and sports culture",
                  "Safe, accessible, and well-connected public transport",
                  "Strong job market and career opportunities, especially in technology, finance, healthcare, and professional services",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[16px] leading-7 text-brand-gray pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Cost of living ── */}
      <section id="cost-of-living" className="scroll-mt-35 bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Cost of living{" "}
            <span className="font-sans text-[40px] font-normal">(indicative per week)</span>
          </h2>
          <ul className="list-disc pl-6 space-y-3 max-w-2xl">
            {[
              { label: "Accommodation:", value: "A$200–400 (shared) to A$400–600 (private)" },
              { label: "Food and groceries:", value: "A$100–150" },
              { label: "Transport:", value: "A$50–70 (public transport concession available for students)" },
              { label: "Personal and entertainment:", value: "A$80–150" },
            ].map(({ label, value }, i) => (
              <li key={i} className="font-sans text-[16px] leading-[35px] text-brand-gray pl-1">
                <span className="font-medium text-black">{label}</span> {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── 4. Work opportunities ── */}
      <section id="work-opportunities" className="scroll-mt-35 bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Work opportunities
          </h2>
          <div className="flex flex-col gap-5 max-w-3xl">
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              International students on a student visa can work up to 48 hours per fortnight during study periods and unlimited hours during breaks. Melbourne's strong economy offers part-time and casual work opportunities in retail, hospitality, administration, and more.
            </p>
            <p className="font-sans text-[16px] leading-[35px] text-brand-gray">
              At Stockdale, many students combine study and work, making Melbourne an ideal place to build both experience and qualifications at the same time.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
