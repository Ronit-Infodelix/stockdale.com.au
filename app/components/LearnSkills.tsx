"use client";

import { useState, useRef } from "react";
import { ChevronRight, GraduationCap, BookOpen, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion, animate,
  useMotionValue, useTransform,
  type Variants,
} from "framer-motion";
import Section from "./ui/Section";
import Image from "next/image";

const SPRING = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

type Card = {
  icon: LucideIcon;
  title: string;
  gradient: string;
  backHeading: string;
  backBody: string;
  bullets: string[];
};

const cards: Card[] = [
  {
    icon: GraduationCap,
    title: "Employment-connected Degrees",
    gradient: "linear-gradient(197.37deg, #43A48E 6.72%, #014F3D 33.41%, #013529 76.76%)",
    backHeading: "Real outcomes, built in.",
    backBody: "Every degree is co-designed with industry so your qualification translates directly to career success.",
    bullets: [
      "Work-integrated learning from Year 1",
      "Guaranteed internship placement",
      "95% employed within 6 months",
    ],
  },
  {
    icon: BookOpen,
    title: "The Stockdale Integrated Capability Framework",
    gradient: "linear-gradient(174.01deg, #43A48E 0.56%, #014F3D 36.40%, #013529 89.05%)",
    backHeading: "A framework for life.",
    backBody: "Twelve core capability domains benchmarked against industry standards, evolving with you throughout your career.",
    bullets: [
      "12 cross-disciplinary capability domains",
      "Continuous industry-benchmarked assessment",
      "Personalised skill development pathway",
    ],
  },
  {
    icon: Network,
    title: "An Education–Employment Ecosystem",
    gradient: "linear-gradient(156.39deg, #43A48E 7.21%, #014F3D 42.32%, #013529 80.25%)",
    backHeading: "Study where industry lives.",
    backBody: "Our 200+ partner network embeds live projects, mentors, and career pathways directly into your studies.",
    bullets: [
      "200+ active industry partnerships",
      "Live briefs from partner organisations",
      "Global career placement network",
    ],
  },
];

// ── Flip card ─────────────────────────────────────────────────────────────────
const EASE_FLIP = [0.4, 0, 0.2, 1] as const;

function FlipCard({ card, variants }: { card: Card; variants: Variants }) {
  const [flipped, setFlipped] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { icon: Icon, title, gradient, backHeading, backBody, bullets } = card;

  // Rotation MotionValue — lets us derive shadow from the live angle
  const rotateY = useMotionValue(0);

  // Box-shadow peaks at 90 ° (card is edge-on, maximising perceived depth)
  const boxShadow = useTransform(
    rotateY,
    [0, 90, 180],
    [
      "0 4px 20px rgba(1,53,41,0.08)",
      "0 28px 64px rgba(1,53,41,0.22), 0 8px 20px rgba(0,0,0,0.12)",
      "0 4px 20px rgba(1,53,41,0.08)",
    ]
  );

  const onEnter = () => {
    clearTimeout(leaveTimer.current);
    animate(rotateY, 180, { duration: 0.7, ease: EASE_FLIP });
    setFlipped(true);
  };

  const onLeave = () => {
    animate(rotateY, 0, { duration: 0.7, ease: EASE_FLIP });
    // Delay state to let content fade before the face becomes invisible (~half-flip)
    leaveTimer.current = setTimeout(() => setFlipped(false), 280);
  };

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  // Delays for back-face content stagger — only active when flipping IN
  const d = (base: number) => ({ duration: 0.36, delay: flipped ? base : 0, ease: SPRING });

  return (
    <motion.div
      variants={variants}
      className="h-[300px] cursor-pointer relative"
      style={{ perspective: "1200px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: SPRING }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Rotating inner */}
      <motion.div
        className="relative w-full h-full rounded-[30px]"
        style={{
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
          boxShadow,
        }}
      >
        {/* ── Front ── */}
        <div
          className="rounded-[30px] border-b-4 border-[#d6a929] p-8 flex flex-col justify-between h-full"
          style={{ ...faceBase, background: gradient }}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/15 shrink-0">
              <Icon size={20} strokeWidth={1.5} color="white" />
            </div>
            <h3 className="font-agatho font-bold text-[38px] leading-[0.9] text-white tracking-[-0.4px]">
              {title}
            </h3>
          </div>
          <span className="flex items-center gap-1.5 text-white/80 text-[13px] font-sans">
            Hover to explore <ChevronRight size={12} strokeWidth={2} />
          </span>
        </div>

        {/* ── Back ── */}
        <div
          className="rounded-[30px] border-b-4 border-brand-green-dark p-8 flex flex-col justify-between h-full bg-white overflow-hidden"
          style={{ ...faceBase, transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col gap-3">
            <motion.h4
              className="font-agatho font-bold text-[26px] leading-tight text-brand-green-darkest"
              animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 14 }}
              transition={d(0.32)}
            >
              {backHeading}
            </motion.h4>

            <motion.p
              className="font-sans text-[13px] leading-[1.55] text-[#767676]"
              animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 10 }}
              transition={d(0.44)}
            >
              {backBody}
            </motion.p>

            <ul className="flex flex-col gap-1.5 mt-1">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  className="flex items-start gap-2 text-[13px] font-sans text-brand-green-darkest"
                  animate={{ opacity: flipped ? 1 : 0, x: flipped ? 0 : -10 }}
                  transition={d(0.54 + i * 0.08)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-[5px] shrink-0" />
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.button
            className="flex items-center gap-1.5 text-brand-green-dark text-[14px] font-sans font-medium self-start"
            animate={{ opacity: flipped ? 1 : 0, y: flipped ? 0 : 6 }}
            transition={d(0.76)}
          >
            Know more <ChevronRight size={13} strokeWidth={2} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
const cardGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: SPRING } },
};

export default function LearnSkills() {
  return (
    <Section className="bg-[#f9f9f9]" containerClassName="flex flex-col items-center gap-12">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg/map.png"
          alt=""
          fill
          className="object-contain pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <motion.span
          className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-1 rounded-[4px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: SPRING }}
        >
          What sets us apart
        </motion.span>

        <motion.h2
          className="font-agatho font-bold text-[50px] leading-tight text-black"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: SPRING }}
        >
          Learn Skills for the Real World
        </motion.h2>

        <motion.p
          className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[517px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.65, delay: 0.22, ease: SPRING }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-3 gap-6 w-full"
        variants={cardGrid}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        {cards.map((card) => (
          <FlipCard key={card.title} card={card} variants={cardItem} />
        ))}
      </motion.div>
    </Section>
  );
}
