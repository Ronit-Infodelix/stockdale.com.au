"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CircleCheckBigIcon,
  type LucideIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-40px" } as const;

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Campus", href: "/our-campus" },
  { label: "Our Team", href: "/our-team" },
  { label: "News & Events", href: "/news-and-events" },
  { label: "Contact", href: "/contact" },
];

const admissions = [
  { label: "How to Apply", href: "/how-to-apply" },
  { label: "Domestic Students", href: "/domestic-students" },
  { label: "International Students", href: "/international-students" },
  { label: "Fees & Charges", href: "/fees-refunds-and-charges" },
  { label: "Scholarships", href: "/scholarships" },
];

const studentLife = [
  { label: "Melbourne Life", href: "/melbourne-life" },
  { label: "Library & Databases", href: "/library-and-databases" },
  { label: "Student Handbook", href: "/student-handbook" },
  { label: "Staying Safe", href: "/staying-safe" },
  { label: "Policies & Procedures", href: "/policies-and-procedures" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Accessibility", href: "#" },
];

const social = [
  { Icon: CircleCheckBigIcon, label: "WhatsApp", active: false },
  { Icon: CircleCheckBigIcon, label: "Instagram", active: false },
  { Icon: CircleCheckBigIcon, label: "Facebook", active: true },
  { Icon: CircleCheckBigIcon, label: "LinkedIn", active: false },
  { Icon: CircleCheckBigIcon, label: "Twitter", active: false },
];

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const colItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SPRING } },
};

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white z-10 relative">
      {/* ── Links + Contact ── */}
      <Container className="py-16">
        <motion.div
          className="grid grid-cols-[1.5fr_1fr_1fr_1.6fr] gap-8"
          variants={colVariants}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Quick links */}
          <motion.div variants={colItem}>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Admissions */}
          <motion.div variants={colItem}>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Admissions
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {admissions.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Student Life */}
          <motion.div variants={colItem}>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Student Life
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {studentLife.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="flex flex-col gap-7" variants={colItem}>
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="font-sans text-[14px] leading-[24px] text-[#9ca3af]">
                Level 2, 120 Miller Street,
                <br />
                West Melbourne VIC 3003, Australia
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0"
              />
              <p className="font-sans text-[14px] text-[#9ca3af]">
                TBA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0"
              />
              <p className="font-sans text-[14px] text-[#9ca3af]">
                admin@stockdale.edu.au
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Divider ── */}
      <div className="border-t border-[#2d2d2d]" />

      {/* ── Social icons ── */}
      <motion.div
        className="flex items-center justify-center gap-4 py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.65, ease: SPRING }}
      >
        {social.map(
          ({
            Icon,
            label,
            active,
          }: {
            Icon: LucideIcon;
            label: string;
            active: boolean;
          }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                aria-label={label}
                className={`w-[58px] h-[58px] rounded-full flex items-center justify-center border transition-colors ${
                  active
                    ? "bg-white border-white text-[#1c1c1c]"
                    : "border-[#404040] text-white hover:border-white"
                }`}
              >
                <Icon size={22} strokeWidth={1.5} />
              </Link>
            </motion.div>
          ),
        )}
      </motion.div>

      {/* ── Logo + watermark + bottom bar ── */}
      <div className="relative overflow-hidden group">
        {/* Watermark */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <svg
            viewBox="0 0 1400 260"
            className="w-[1400px] max-w-none h-[260px]"
          >
            <defs>
              <linearGradient
                id="stockdaleStrokeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#014f3d" />
                <stop offset="50%" stopColor="#43a48e" />
                <stop offset="100%" stopColor="#f0c41a" />
              </linearGradient>
            </defs>

            {/* Base faint text */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-agatho font-bold tracking-[0.18em]"
              fontSize="190"
              fill="rgba(255,255,255,0.04)"
            >
              STOCKDALE
            </text>

            {/* Hover border only */}
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="
        font-agatho font-bold tracking-[0.18em]
        opacity-0 transition-opacity duration-500 ease-out
        group-hover:opacity-100
      "
              fontSize="190"
              fill="transparent"
              stroke="url(#stockdaleStrokeGradient)"
              strokeWidth="2"
            >
              STOCKDALE
            </text>
          </svg>
        </div>

        {/* Logo */}
        <motion.div
          className="relative flex flex-col items-center py-10 gap-3 z-10 group-hover:-z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: SPRING }}
        >
          <Image
            src="/images/logo/secondary.svg"
            alt="Stockdale Higher Education Institute"
            width={240}
            height={180}
            className="object-contain"
          />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-[#2d2d2d] relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, delay: 0.1, ease: SPRING }}
        >
          <Container>
            <div className="flex items-center justify-between py-5">
              <p className="font-sans text-[12px] text-[#6b7280]">
                &copy;&nbsp;2026 Stockdale Higher Education Institute. All rights reserved.
              </p>
              <div className="flex items-center gap-8">
                {legalLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="font-sans text-[12px] text-[#6b7280] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </motion.div>
      </div>
    </footer>
  );
}
