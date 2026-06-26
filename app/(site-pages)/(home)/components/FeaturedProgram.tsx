"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
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
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: SPRING } },
};

const btnSlide = {
  hidden: { opacity: 0, x: -20 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: SPRING } },
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
  const imgX     = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={sectionRef}>
    <Section
      className="relative overflow-hidden bg-[#f8f5eb]"
      containerClassName="flex items-center"
    >
      {/* Image — scroll-driven slide + reveal */}
      <motion.div
        className="absolute inset-y-0 right-0 w-[52%] overflow-hidden"
        style={{ x: imgX, opacity: imgOpacity }}
      >
        {/* Curtain mask — 1 px bleed on sides eliminates sub-pixel seam */}
        <motion.div
          className="absolute inset-y-0 -inset-x-[1px] bg-[#f8f5eb] origin-left z-10 will-change-transform"
          style={{ scaleX: maskScaleX }}
        />
        <Image
          src="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          alt="Students studying together"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative z-10 flex flex-col gap-6 max-w-120"
        variants={textStagger}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.h2
          variants={slideUp}
          className="font-agatho font-bold text-[45px] leading-tight text-[#014f3d]"
        >
          Bachelor of
          <br />
          Information Technology
        </motion.h2>

        <motion.p
          variants={slideUp}
          className="font-sans text-[16px] text-brand-gray max-w-100"
        >
          In today&apos;s rapidly evolving digital landscape, data analytics has
          become a crucial skill across various industries. The Bachelor of
          Information Technology (BIT) with a specialisation in Data Analytics
          addresses the growing need for professionals who can harness the power
          of data to drive business innovation and decision-making.
        </motion.p>

        <motion.button
          variants={btnSlide}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.97 }}
          className="self-start flex items-center gap-2 px-5 py-[14px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          Know more
          <ChevronRight size={14} strokeWidth={2} />
        </motion.button>
      </motion.div>
    </Section>
    </div>
  );
}
