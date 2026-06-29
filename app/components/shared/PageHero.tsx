"use client";

import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/Container";

const SPRING = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: SPRING } },
};

const barReveal = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: SPRING } },
};

const wordMask = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const wordReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: SPRING } },
};

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs,
  children,
  className = "",
}: PageHeroProps) {
  const hasBread = breadcrumbs && breadcrumbs.length > 0;
  const words = title.split(" ");

  return (
    <div className={`w-full ${className}`}>
      <section className="relative w-full overflow-hidden bg-[#050e1a] min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.5) 58%, rgba(0,0,0,0) 82%)",
          }}
        />

        {/* Decorative corner images */}
        <div className="h-1/2 absolute w-full z-1 bottom-0 grid grid-cols-3 pointer-events-none">
          <div className="relative -left-1/2 top-1/3">
            <Image
              src="/images/home/hero/left.webp"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </div>
          <div />
          <div className="relative -right-1/2 top-1/2">
            <Image
              src="/images/home/hero/right.webp"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <Container className="absolute 2xl:top-2/3 top-3/5 z-10 left-1/2 -translate-x-1/2">
          {children}

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Gold bar */}
            <motion.div
              variants={barReveal}
              className="w-24 h-1 bg-brand-gold-dark mb-3"
            />

            {/* Title — word curtain reveal */}
            <motion.h1
              variants={wordMask}
              className="font-agatho text-[80px] font-bold leading-[1.05] text-white flex flex-wrap gap-x-[0.22em]"
            >
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden leading-[1.1]">
                  <motion.span className="inline-block" variants={wordReveal}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className="font-sans text-[16px] leading-6 text-white/75 max-w-130"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Breadcrumb strip */}
      {hasBread && (
        <nav
          aria-label="Breadcrumb"
          className="absolute bottom-0 bg-white/10 backdrop-blur-sm border-t border-white/15 w-full z-1 2xl:z-0"
        >
          <Container className="flex items-center gap-1.5 py-3 px-3">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <Fragment key={crumb.label}>
                  {i > 0 && (
                    <ChevronRight
                      size={12}
                      strokeWidth={2}
                      className="text-white/40 shrink-0"
                    />
                  )}
                  {!isLast && crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="flex items-center gap-1.5 font-sans text-xs text-white/70 hover:text-white transition-colors duration-150 whitespace-nowrap"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="flex items-center justify-center font-sans text-xs text-white whitespace-nowrap">
                      {crumb.label}
                    </span>
                  )}
                </Fragment>
              );
            })}
          </Container>
        </nav>
      )}
    </div>
  );
}
