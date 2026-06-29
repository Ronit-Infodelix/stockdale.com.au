"use client";

import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

const cards = [
  {
    title: "Excellence in Teaching",
    description: "Highest standards in teaching and learning with a commitment to integrity and innovation that produces industry-ready graduates.",
    icon: "/images/home/icons/icon-courses.svg",
    iconW: 40,
    iconH: 58,
  },
  {
    title: "Student-Centred",
    description: "Effective teaching paired with student support services focused on wellbeing, safety, outcomes, and success.",
    icon: "/images/home/icons/icon-trainers.svg",
    iconW: 62,
    iconH: 62,
  },
  {
    title: "Diversity & Inclusion",
    description: "Honouring a culturally diverse community and providing everyone with quality of experience, opportunities, and success.",
    icon: "/images/home/icons/icon-flexible.svg",
    iconW: 56,
    iconH: 62,
  },
  {
    title: "Academic Freedom",
    description: "Committed to freedom of speech and academic freedom as foundational principles underpinning all our activities.",
    icon: "/images/home/icons/icon-support.svg",
    iconW: 52,
    iconH: 66,
  },
];

/*
  5 items (4 cards + 1 ghost), each 26 vw wide.
  Overlap = 6 vw  →  visible slice per circle = 20 vw = 100 vw / 5.
  Total row = 5 × 26 vw − 4 × 6 vw = 106 vw → bleeds 3 vw each side.
  Centering: margin-left −3 vw so bleed is equal on both sides.
  Section overflow-hidden clips the bleed cleanly.
*/
const C = "26vw"; // circle diameter
const OV = "6vw"; // overlap between circles
const VIS = "20vw"; // visible slice width per circle

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-green-darkest">
      {/* Shimmering video bg */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        src="/videos/shimmering.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Header ── */}
      <Container className="relative z-10 flex flex-col items-center text-center pt-20">
        <motion.div
          className="bg-brand-green-light text-black text-[10px] font-sans px-3 py-[5px] rounded-[4px] mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: SPRING }}
        >
          Why choose us
        </motion.div>

        <motion.h2
          className="font-agatho text-[50px] leading-tight text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: SPRING }}
        >
          Your Success Is Our <span className="text-[#d6a929]">Priority</span>
        </motion.h2>

        <motion.p
          className="font-sans text-[16px] leading-[24px] text-[#64817a] max-w-[516px] mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.2, ease: SPRING }}
        >
          At Stockdale, your success is built on academic excellence, student support, diversity, and freedom of inquiry.
        </motion.p>
      </Container>

      {/* ── Circles row ── */}
      <div className="relative z-10 flex scale-110 origin-top-left -left-10 -bottom-20">
        {cards.map(({ title, description, icon, iconW, iconH }, i) => (
          <motion.div
            key={title}
            className="relative shrink-0 rounded-full bg-[#012a20]"
            style={{
              width: C,
              height: C,
              marginLeft: i === 0 ? 0 : `calc(-${OV})`,
              border: "2px solid #055744",
              zIndex: cards.length - i,
            }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, delay: i * 0.28, ease: SPRING }}
          >
            {/*
              Content anchored in the visible (non-overlapped) slice.
              Each slice = VIS = 20vw. Pad 1.5vw from the left of visible area.
              For the first circle, visible area starts at 3vw (bleed).
            */}
            <div
              className="absolute flex flex-col gap-[1.1vw]"
              style={{
                left: i === 0 ? `calc(${OV} - 1vw)` : `calc(${OV} + 1.5vw)`,
                top: "50%",
                width: `calc(${VIS} - 3.5vw)`,
                transform: "translateY(-50%)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon}
                alt=""
                width={iconW}
                height={iconH}
                style={{ width: "2.8vw", height: "auto", objectFit: "contain" }}
              />

              <h3 className="font-agatho text-[1.4vw] leading-tight text-white">
                {title}
              </h3>

              <p className="font-sans text-[0.85vw] leading-[1.5] text-[#64817a]">
                {description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Ghost circle — border only, bleeds off right */}
        <motion.div
          className="shrink-0 rounded-full"
          style={{
            width: C,
            height: C,
            marginLeft: `calc(-${OV})`,
            border: "2px solid #055744",
          }}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{
            duration: 0.85,
            delay: cards.length * 0.18,
            ease: SPRING,
          }}
        />
      </div>

      {/* Bottom breathing room */}
      <div className="h-[3vw]" />
    </section>
  );
}
