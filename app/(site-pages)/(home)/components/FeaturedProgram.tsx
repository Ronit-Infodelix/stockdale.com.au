"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "../../../components/ui/Section";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

const textStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: SPRING } },
};

const btnSlide = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: SPRING } },
};

export default function FeaturedProgram() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // 0 = section top at 90 % viewport (just 10 % visible)
  // 1 = section top at 60 % viewport (60 % visible) → reveal done
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.6"],
  });

  // Mask sweeps away as you scroll — fully gone when section is 60% in view
  const maskScaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // Image slides in sync with the reveal
  const imgX = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={sectionRef}>
      <Section
        className="relative overflow-hidden bg-[#f8f5eb]"
        containerClassName="flex items-center"
      >
        {/* Image — scroll-driven slide + reveal, desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[52%] overflow-hidden"
          style={{ x: imgX, opacity: imgOpacity }}
        >
          {/* Curtain mask — 1 px bleed on sides eliminates sub-pixel seam */}
          <motion.div
            className="absolute inset-y-0 -inset-x-[1px] bg-[#f8f5eb] origin-left z-10 will-change-transform"
            style={{ scaleX: maskScaleX }}
          />
          <Image
            src="/images/home/about/students-outdoor.webp"
            alt="Students studying together"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="relative z-10 flex flex-col lg:gap-6 gap-3 w-full lg:max-w-120"
          variants={textStagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {/* Label */}
          <div>
            <motion.p
              variants={slideUp}
              className="font-sans text-badge font-medium uppercase tracking-[2px] text-[#a6860d] md:mb-4 mb-2"
            >
              Now Accepting Applications
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={slideUp}
              className="font-agatho font-bold text-subheading text-[#014f3d]"
            >
              Bachelor of
              <br />
              Information Technology
            </motion.h2>
          </div>
          {/* Body */}
          <motion.p
            variants={slideUp}
            className="font-sans text-subtitle text-brand-gray max-w-100"
          >
            Specialising in Data Analytics. Industry-relevant curriculum with
            real-world projects and expert faculty.
          </motion.p>

          <div className="flex flex-col gap-4">
            {/* Bullets */}
            <motion.ul variants={slideUp} className="flex flex-col gap-2">
              {[
                "3 Years Full Time",
                "West Melbourne Campus",
                "AQF Level 7 Qualification",
                "Domestic & International Students",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#014f3d] flex items-center justify-center shrink-0">
                    <Check size={11} strokeWidth={2.5} className="text-white" />
                  </span>
                  <span className="font-sans text-para text-[#2d2d2d]">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={btnSlide} className="flex items-center gap-3">
              <Link
                href="/bachelor-of-information-technology"
                className="inline-flex items-center gap-2 px-5 py-[13px] rounded-[8px] text-white text-para font-sans whitespace-nowrap hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Explore Course
                <ChevronRight size={14} strokeWidth={2} />
              </Link>
              <Link
                href="/how-to-apply"
                className="inline-flex items-center gap-2 px-5 py-[13px] rounded-[8px] border border-[#014f3d] text-[#014f3d] text-para font-sans whitespace-nowrap hover:bg-[#014f3d] hover:text-white transition-colors"
              >
                Apply Now
                <ChevronRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile image — shown below text, hidden on desktop */}
          <motion.div
            variants={slideUp}
            className="block lg:hidden relative w-full aspect-16/9 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/home/about/students-outdoor.webp"
              alt="Students studying together"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
