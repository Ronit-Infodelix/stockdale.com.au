"use client";

import { useState } from "react";
import Container from "@/app/components/ui/Container";

type UnitTab = "core" | "specialisation" | "elective";

const UNITS: Record<UnitTab, { code: string; name: string }[]> = {
  core: [
    { code: "BIT101", name: "IT Professional Skills" },
    { code: "BIT102", name: "Business Information Systems" },
    { code: "BIT103", name: "Introduction to Programming" },
    { code: "BIT104", name: "Discrete Mathematics" },
    { code: "BIT105", name: "Database Systems" },
    { code: "BIT106", name: "Introduction to Information Security" },
    { code: "BIT107", name: "Networking Fundamentals" },
    { code: "BIT108", name: "Web and Cloud Systems" },
    { code: "BIT203", name: "Systems Analysis and Design" },
    { code: "BIT206", name: "Project Management" },
    { code: "BIT305", name: "Capstone Project (20 credit points)" },
  ],
  specialisation: [
    { code: "BIT201", name: "Statistics for Data Analysis" },
    { code: "BIT202", name: "Data Modelling and Analysis" },
    { code: "BIT204", name: "Business Analytics" },
    { code: "BIT205", name: "Data Analytics Programming" },
    { code: "BIT301", name: "Machine Learning" },
    { code: "BIT302", name: "Predictive Analytics" },
    { code: "BIT303", name: "Data Mining and Visualisation" },
    { code: "BIT304", name: "Big Data Analytics" },
  ],
  elective: [
    { code: "BIT208", name: "eCommerce and Digital Business Models" },
    { code: "BIT209", name: "Digital Marketing and Analytics" },
    { code: "BIT306", name: "Human Computer Interaction and User Experience" },
    { code: "BIT308", name: "Artificial Intelligence in Business" },
  ],
};

const UNIT_TABS: { key: UnitTab; label: string }[] = [
  { key: "core", label: "Core Units" },
  { key: "specialisation", label: "Specialisation Units" },
  { key: "elective", label: "Elective Units" },
];

export default function BITCoreUnits() {
  const [unitTab, setUnitTab] = useState<UnitTab>("core");

  return (
    <section id="core-units" className="bg-white scroll-mt-20">
      <Container>
        <div className="max-w-200">
          <div className="flex items-center border-b border-black mb-6">
            {UNIT_TABS.map(({ key, label }) => (
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
          <div className="rounded-lg overflow-hidden">
            {UNITS[unitTab].map((unit, i) => (
              <div
                key={unit.code}
                className={`flex items-center gap-6 px-6 py-3 ${i % 2 === 0 ? "bg-[#f2f2f2]" : "bg-[#f9f9f9]"}`}
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
  );
}
