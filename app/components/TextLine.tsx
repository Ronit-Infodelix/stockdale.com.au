"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type TickerRowProps = {
  word: string;
  direction: 1 | -1;
  speed: number;
};

function TickerRow({ word, direction, speed }: TickerRowProps) {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, (latest) => {
    const cycle = (latest * speed) % 25;
    return direction === -1 ? `${-cycle}%` : `${cycle - 25}%`;
  });

  const items = Array.from({ length: 8 }, (_, i) => (
    <span
      key={i}
      className={`inline-block pr-10 ${
        i % 2 === 0
          ? "text-[#F8F5EB]"
          : "text-transparent [-webkit-text-stroke:0.5px_#F0C41A]"
      }`}
    >
      {word}
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap leading-none">
      <motion.div className="inline-flex will-change-transform" style={{ x }}>
        {items}{items}{items}{items}
      </motion.div>
    </div>
  );
}

export default function TextLine() {
  return (
    <section className="bg-brand-green-darkest py-10 overflow-hidden select-none">
      <div className="flex flex-col gap-3 font-sans font-bold uppercase text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.01em]">
        <TickerRow word="INNOVATE" direction={-1} speed={0.0009} />
        <TickerRow word="DISCOVER" direction={1}  speed={0.0008} />
        <TickerRow word="SUCCEED"  direction={-1} speed={0.0002} />
      </div>
    </section>
  );
}
