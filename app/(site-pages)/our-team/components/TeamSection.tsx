"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/app/components/ui/Container";

interface Member {
  name: string;
  role: string;
  image?: string;
}

interface TeamGroup {
  label: string;
  heading: string;
  description: string;
  members: Member[];
}

const BASE = "/images/team/members/";

const GROUPS: TeamGroup[] = [
  {
    label: "Board of Directors",
    heading: "Board of Directors",
    description:
      "The Board is responsible for setting the strategic direction of HEA and ensuring the institution fulfils its legal, regulatory, financial, and ethical obligations. The Board oversees institutional performance, sustainability, and risk management.",
    members: [
      { name: "Professor Janet Verbyla",          role: "Independent Director and Chair", image: BASE + "image 6.png" },
      { name: "Associate Professor Justin Pierce", role: "Independent Director",           image: BASE + "image 7.png" },
      { name: "Dr Julie Fisher",                   role: "Independent Director",           image: BASE + "image 7-1.png" },
      { name: "Associate Professor Beulah Moses",  role: "Independent Director",           image: BASE + "image 6-3.png" },
    ],
  },
  {
    label: "Academic Board",
    heading: "Academic Board",
    description:
      "The Academic Board is the principal academic governance body, responsible for oversight of academic quality, learning and teaching, assessment standards, academic integrity, and scholarly activity. The Academic Board establishes committees to support its work and ensures alignment with regulatory requirements.",
    members: [
      { name: "Dr Samuel Kaspi",   role: "Independent Member",           image: BASE + "image 6-1.png" },
      { name: "Mr Colin Hardie",   role: "Chair and Independent Member" },
      { name: "Mr Colin Hardie",   role: "Independent Member",           image: BASE + "image 8.png" },
      { name: "Dr Catherine Lang", role: "Independent Member",           image: BASE + "image 6-4.png" },
      { name: "Dr Samuel Kaspi",   role: "Independent Member" },
    ],
  },
  {
    label: "Executive Team",
    heading: "Executive Team",
    description:
      "Stockdale is supported by qualified and experienced leaders and staff responsible for the delivery, oversight, and continuous improvement of academic programs.",
    members: [
      { name: "Ms Marni Woods",         role: "Chief Executive Officer", image: BASE + "image 6-2.png" },
      { name: "Dr Farinoush Farhadieh", role: "Dean" },
      { name: "Dr Isaac Kwadwo Nti",    role: "Course Coordinator",      image: BASE + "image 7-2.png" },
    ],
  },
];

function PersonCard({ name, role, image }: Member) {
  return (
    <div className="w-full h-full bg-[#f8f5eb]">
      {/* Photo area */}
      <div className="relative h-[258px] rounded-t-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top"
          />
        ) : (
          /* Placeholder silhouette — head + body shapes from Figma */
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#DFDFDF]">
            <div className="w-[86px] h-[85px] rounded-full bg-[#b2b2b2]" />
            <div className="w-[158px] h-[134px] rounded-tl-[60px] rounded-tr-[60px] bg-[#b2b2b2]" />
          </div>
        )}
      </div>

      {/* Info card */}
      <div className="bg-[#f8f5eb] px-5 pt-4 pb-5 min-h-[96px]">
        <p className="font-agatho text-[20px] leading-[24px] text-brand-green-darkest">
          {name}
        </p>
        <p className="font-sans text-[12px] leading-5 text-black mt-1">{role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState(GROUPS[0].label);
  const group = GROUPS.find((g) => g.label === activeTab)!;

  return (
    <div>
      {/* ── Tab bar ── */}
      <div className="bg-brand-green-darkest">
        <Container className="flex">
          {GROUPS.map((g) => (
            <button
              key={g.label}
              onClick={() => setActiveTab(g.label)}
              className={[
                "px-5 py-[18px] text-[12px] font-sans font-bold uppercase tracking-[0.96px] whitespace-nowrap transition-colors duration-150",
                activeTab === g.label
                  ? "bg-brand-green-light text-brand-green-darkest"
                  : "text-white hover:text-white/70",
              ].join(" ")}
            >
              {g.label}
            </button>
          ))}
        </Container>
      </div>

      {/* ── Content ── */}
      <div className="bg-white py-12">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-4">
            {group.heading}
          </h2>
          <p className="font-sans text-[16px] leading-7 text-brand-gray max-w-4xl mb-10">
            {group.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {group.members.map((member, i) => (
              <PersonCard key={`${member.name}-${i}`} {...member} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
