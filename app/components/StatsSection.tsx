"use client";

import { Briefcase, GraduationCap, Users, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import PointerGrid from "./ui/PointerGrid";
import { CountAnimation } from "./animation/CountAnimation";

const SPRING = [0.22, 1, 0.36, 1] as const;

const stats: {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
}[] = [
  {
    icon: Briefcase,
    value: 95,
    suffix: "%",
    label: "Graduate employment rate within 6 months",
  },
  {
    icon: GraduationCap,
    value: 15000,
    suffix: "+",
    label: "Students from 80+ countries",
  },
  { icon: Users, value: 200, suffix: "+", label: "Industry partnerships" },
  { icon: MapPin, value: 15, label: "International locations" },
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
    <Section className="bg-[#f5f5f5] overflow-hidden">
      {/* interactive pointer-sweep grid — pointer-events:none so it never blocks clicks */}
      <PointerGrid cols={20} rows={20} fadeDuration={900} cellOpacity={0.28} />
      {/* Heading + description */}
      <div className="flex items-start justify-between mb-12">
        <motion.h2
          className="font-agatho font-bold text-[50px] leading-tight text-black shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: SPRING }}
        >
          Shaping Careers,
          <br />
          Empowering Success
        </motion.h2>

        <motion.p
          className="text-[#767676] text-[16px] leading-[24px] max-w-[472px] mt-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, delay: 0.15, ease: SPRING }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
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
            <p className="text-[#767676] text-[14px] leading-[20px] max-w-[192px]">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
