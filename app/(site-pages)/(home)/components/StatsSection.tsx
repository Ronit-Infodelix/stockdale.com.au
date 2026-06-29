"use client";

import { Briefcase, GraduationCap, Users, BookOpen, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import PointerGrid from "../../../components/ui/PointerGrid";
import { CountAnimation } from "../../../components/animation/CountAnimation";

const SPRING = [0.22, 1, 0.36, 1] as const;

const stats: {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
}[] = [
  {
    icon: Briefcase,
    value: 94,
    suffix: "%",
    label: "Graduate Employability",
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Students Enrolled",
  },
  { icon: Users, value: 25, suffix: "+", label: "Industry Partners" },
  { icon: BookOpen, value: 40, suffix: "+", label: "Academic Staff" },
];

// Card stagger
const cardGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 36, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: SPRING },
  },
};

// Icon pop inside each card
const iconPop = {
  hidden: { scale: 0, rotate: -15, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: SPRING, delay: 0.15 },
  },
};

const VIEWPORT = { once: true, margin: "-80px" } as const;

export default function StatsSection() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-[#f5f5f5] overflow-hidden">
      {/* PointerGrid is a direct child of <section> so absolute inset-0 covers the full bg */}
      <PointerGrid cellSize={20} fadeDuration={900} cellOpacity={0.28} />

      <Container className="z-100 relative">
      {/* Heading + description */}
      <div className="flex items-start justify-between gap-16 mb-12">

        {/* Left — eyebrow + heading + CTA */}
        <div className="flex flex-col gap-5 shrink-0 max-w-[420px]">
          <motion.h2
            className="font-agatho font-bold text-[48px] leading-[1.1] text-black"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, delay: 0.05, ease: SPRING }}
          >
            Shaping the Future of
            <br />
            Australian Higher Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.2, ease: SPRING }}
          >
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-brand-green-darkest hover:text-brand-gold-dark transition-colors group"
            >
              Discover Our Story
              <ChevronRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Right — two body paragraphs */}
        <motion.div
          className="flex flex-col gap-4 max-w-[500px] pt-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.15, ease: SPRING }}
        >
          <p className="text-brand-gray text-[16px] leading-[28px]">
            Stockdale Higher Education Institute is an Australian higher education provider based in West Melbourne, Victoria. Established in 2026 and registered with TEQSA, we deliver professional qualifications to domestic and international students.
          </p>
          <p className="text-brand-gray text-[16px] leading-[28px]">
            We are committed to freedom of speech and academic freedom as principles that underpin everything we do — from teaching and research to the way we engage with students, staff, and the wider community.
          </p>
        </motion.div>

      </div>

      {/* Stat cards */}
      <motion.div
        className="grid grid-cols-4 gap-4"
        variants={cardGrid}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <motion.div
            key={label}
            variants={cardItem}
            className="bg-white rounded-[20px] border border-[#e5bd1b]/50 shadow-[0px_8px_10px_0px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between h-[190px]"
          >
            {/* Icon + number */}
            <div className="flex items-center gap-3">
              <motion.div variants={iconPop}>
                <Icon size={40} strokeWidth={1.25} color="#d6a929" />
              </motion.div>
              <CountAnimation
                number={value}
                suffix={suffix ?? ""}
                className="font-agatho font-bold text-[52px] leading-none text-brand-green-darkest"
              />{" "}
            </div>

            {/* Label */}
            <p className="text-brand-gray text-[14px] leading-[20px] max-w-[192px]">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
      </Container>
    </section>
  );
}
