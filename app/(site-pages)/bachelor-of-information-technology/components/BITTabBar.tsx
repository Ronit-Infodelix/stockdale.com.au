"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

const TABS = [
  { id: "key-features", label: "Key Features" },
  { id: "course-overview", label: "Course Overview" },
  { id: "course-structure", label: "Course Structure" },
  { id: "core-units", label: "Core Units" },
  { id: "entry-requirements", label: "Entry Requirement & Admissions" },
  { id: "fees", label: "Fees & Costs" },
];

export default function BITTabBar() {
  const [activeTab, setActiveTab] = useState("key-features");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveTab(e.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
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
      <div className="bg-[#fafafa] border-b border-gray-100 w-full">
        <Container>
          <div className="flex items-center justify-end py-4">
            <div className="flex items-center gap-3">
              <Link
                href="/how-to-apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-sans font-medium uppercase tracking-[0.78px] hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Apply Now <ChevronRight size={12} strokeWidth={2} />
              </Link>
              <Link
                href="/how-to-apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest bg-white text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
              >
                How to Apply <ChevronRight size={12} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
