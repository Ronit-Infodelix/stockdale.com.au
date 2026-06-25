"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleCheckBigIcon, type LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const SPRING   = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-40px" } as const;

const quickLinks  = ["About Us", "Courses", "Campuses", "Student Support", "Contact"];
const resources   = ["News", "Blogs", "Events", "Gallery"];
const otherLinks  = ["Accomodations", "Packages", "Faculty & Staffs", "Gallery"];
const legalLinks  = ["Disclaimer", "Privacy Policy", "Terms & Conditions"];

const social = [
  { Icon: CircleCheckBigIcon, label: "WhatsApp",  active: false },
  { Icon: CircleCheckBigIcon, label: "Instagram", active: false },
  { Icon: CircleCheckBigIcon, label: "Facebook",  active: true  },
  { Icon: CircleCheckBigIcon, label: "LinkedIn",  active: false },
  { Icon: CircleCheckBigIcon, label: "Twitter",   active: false },
];

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const colItem = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: SPRING } },
};

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">

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
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">Quick links</h4>
            <ul className="flex flex-col gap-[18px]">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={colItem}>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">Resources</h4>
            <ul className="flex flex-col gap-[18px]">
              {resources.map((l) => (
                <li key={l}>
                  <Link href="#" className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Other link */}
          <motion.div variants={colItem}>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">Other link</h4>
            <ul className="flex flex-col gap-[18px]">
              {otherLinks.map((l) => (
                <li key={l}>
                  <Link href="#" className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="flex flex-col gap-7" variants={colItem}>
            <div className="flex items-start gap-3">
              <MapPin size={20} strokeWidth={1.5} className="text-white flex-shrink-0 mt-0.5" />
              <p className="font-sans text-[14px] leading-[24px] text-[#9ca3af]">
                Main Campus:&nbsp; Level 1, 120 Miller Street,<br />West Melbourne, VIC 3003
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} strokeWidth={1.5} className="text-white flex-shrink-0" />
              <p className="font-sans text-[14px] text-[#9ca3af]">1800 902 480</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} strokeWidth={1.5} className="text-white flex-shrink-0" />
              <p className="font-sans text-[14px] text-[#9ca3af]">info@riverdaleinstitute.edu.au</p>
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
        {social.map(({ Icon, label, active }: { Icon: LucideIcon; label: string; active: boolean }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              aria-label={label}
              className={`w-[58px] h-[58px] rounded-full flex items-center justify-center border transition-colors ${
                active ? "bg-white border-white text-[#1c1c1c]" : "border-[#404040] text-white hover:border-white"
              }`}
            >
              <Icon size={22} strokeWidth={1.5} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Logo + watermark + bottom bar ── */}
      <div className="relative overflow-hidden">
        {/* Watermark */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-agatho font-bold tracking-[0.18em] whitespace-nowrap" style={{ fontSize: 190, color: "rgba(255,255,255,0.04)" }}>
            STOCKDALE
          </span>
        </div>

        {/* Logo */}
        <motion.div
          className="relative flex flex-col items-center py-10 gap-3 z-10"
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
                &copy;&nbsp;2026 Stockdale University. All Rights Reserved.
              </p>
              <div className="flex items-center gap-8">
                {legalLinks.map((l) => (
                  <Link key={l} href="#" className="font-sans text-[12px] text-[#6b7280] hover:text-white transition-colors">
                    {l}
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
