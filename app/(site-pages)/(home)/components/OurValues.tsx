"use client";

import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

const cards = [
  {
    title: "Excellence",
    description:
      "Highest standards in teaching and learning with a commitment to integrity and innovation.",
    icon: "/images/home/icons/icon-courses.svg",
    iconW: 40,
    iconH: 58,
  },
  {
    title: "Student-Centred",
    description:
      "Effective teaching paired with student support services focused on wellbeing and success.",
    icon: "/images/home/icons/icon-trainers.svg",
    iconW: 62,
    iconH: 62,
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Honouring a culturally diverse community with quality of experience for everyone.",
    icon: "/images/home/icons/icon-flexible.svg",
    iconW: 56,
    iconH: 62,
  },
  {
    title: "Academic Freedom",
    description:
      "Committed to freedom of speech and academic freedom as foundational principles.",
    icon: "/images/home/icons/icon-support.svg",
    iconW: 52,
    iconH: 66,
  },
];

/*
  Desktop — horizontal row:
    5 items (4 cards + 1 ghost), each 26 vw wide.
    Overlap = 6 vw → visible slice = 20 vw = 100 vw / 5.

  Mobile — vertical column:
    4 circles, each 76 vw diameter.
    Vertical overlap = 22 vw → visible slice per circle = 54 vw.
    Content anchored just below the overlap line (top: 24 vw).
*/
const C   = "26vw";   // desktop diameter
const OV  = "6vw";    // desktop horizontal overlap
const VIS = "20vw";   // desktop visible slice

const CM   = "76vw";  // mobile diameter
const OVM  = "22vw";  // mobile vertical overlap
const VISC = "54vw";  // mobile visible slice

export default function OurValues() {
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
      <Container className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-20">
        <motion.div
          className="bg-brand-green-light text-black text-[10px] font-sans px-3 py-0.5 rounded-sm mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: SPRING }}
        >
          Our Foundation
        </motion.div>

        <motion.h2
          className="font-agatho text-[30px] sm:text-[38px] md:text-[50px] leading-tight text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: SPRING }}
        >
          Values That <span className="text-brand-gold-dark">Define Us</span>
        </motion.h2>

        <motion.p
          className="font-sans text-[14px] md:text-[16px] leading-6 text-[#64817a] max-w-150 mt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.2, ease: SPRING }}
        >
          From our home in the heart of West Melbourne, Stockdale Higher Education
          Institute pairs academic tradition with forward-thinking innovation and a
          genuine commitment to its students - designed to prepare graduates to lead
          in a complex world.
        </motion.p>
      </Container>

      {/* ── Mobile: vertical circles column ── */}
      <div className="md:hidden relative z-10 flex flex-col items-center mt-6">
        {cards.map(({ title, description, icon, iconW, iconH }, i) => (
          <motion.div
            key={title}
            className="relative shrink-0 rounded-full bg-[#012a20]"
            style={{
              width: CM,
              height: CM,
              marginTop: i === 0 ? 0 : `calc(-${OVM})`,
              border: "2px solid #055744",
              zIndex: cards.length - i,
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.85, delay: i * 0.2, ease: SPRING }}
          >
            {/*
              Content sits in the visible (non-overlapped) slice.
              Top OVM is covered by the previous circle, so we pad
              just below that line. Width is safe at ~52vw centered.
            */}
            <div
              className="absolute flex flex-col"
              style={{
                top: `calc(${OVM} + 1vw)`,
                left: "50%",
                transform: "translateX(-50%)",
                width: `calc(${VISC} - 4vw)`,
                gap: "2.5vw",
              }}
            >
              <h3 className="font-agatho text-[5.5vw] leading-tight text-(--color-brand-gold)">
                {title}
              </h3>
              <p className="font-sans text-[3.8vw] leading-[1.5] text-[#64817a]">
                {description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* ── Desktop: horizontal circles row (unchanged) ── */}
      <div className="hidden md:flex relative z-10 scale-110 origin-top-left -left-10 xl:-bottom-20 -bottom-10">
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
              <p className="font-sans text-[0.85vw] leading-normal text-[#64817a]">
                {description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Ghost circle — bleeds off right */}
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
          transition={{ duration: 0.85, delay: cards.length * 0.18, ease: SPRING }}
        />
      </div>

      {/* Bottom breathing room */}
      <div className="hidden md:block h-[3vw]" />
    </section>
  );
}
