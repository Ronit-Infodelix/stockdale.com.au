"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/app/components/ui/Container";

interface Member {
  name: string;
  role: string;
  image?: string;
}

interface TeamGroup {
  id: string;
  label: string;
  heading: string;
  description: string;
  members: Member[];
}

const BASE = "/images/team/members/";

const GROUPS: TeamGroup[] = [
  {
    id: "board-of-directors",
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
    id: "academic-board",
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
    id: "executive-team",
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
      <div className="relative h-[258px] rounded-t-lg overflow-hidden">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover object-top" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#DFDFDF]">
            <div className="w-[86px] h-[85px] rounded-full bg-[#b2b2b2]" />
            <div className="w-[158px] h-[134px] rounded-tl-[60px] rounded-tr-[60px] bg-[#b2b2b2]" />
          </div>
        )}
      </div>
      <div className="bg-[#f8f5eb] px-5 pt-4 pb-5 min-h-[96px]">
        <p className="font-agatho text-[20px] leading-[24px] text-brand-green-darkest">{name}</p>
        <p className="font-sans text-[12px] leading-5 text-black mt-1">{role}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [activeId, setActiveId] = useState<string>(GROUPS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ratios: Record<string, number> = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { ratios[e.target.id] = e.intersectionRatio; });
        const top = Object.entries(ratios).sort(([, a], [, b]) => b - a)[0];
        if (top && top[1] > 0) setActiveId(top[0]);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) },
    );

    GROUPS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div>
      {/* ── Sticky tab bar — active tab highlighted by scroll position ── */}
      <div className="sticky top-18 z-40 bg-brand-green-darkest">
        <Container className="flex flex-wrap">
          {GROUPS.map(({ id, label }) => (
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

      {/* ── All groups rendered as scroll sections ── */}
      {GROUPS.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-[140px] bg-white py-12">
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
        </section>
      ))}
    </div>
  );
}
