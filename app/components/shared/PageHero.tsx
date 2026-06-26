"use client";

import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/components/ui/Container";

export interface Crumb {
  label: string;
  /** Omit for the current (last) page — renders as plain text */
  href?: string;
}

interface PageHeroProps {
  /** Page title (e.g. "About Stockdale") */
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
  /** Background image URL */
  image: string;
  /** Breadcrumb trail rendered in the white strip below the hero */
  breadcrumbs?: Crumb[];
  /** Optional content rendered above the title — use for tags, badges, etc. */
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
  const sectionHeight = !hasBread ? "min-h-screen" : "min-h-screen";

  const { scrollY } = useScroll();

  const bgY     = useTransform(scrollY, [0, 900], [0, -110]);
  const bgScale = useTransform(scrollY, [0, 900], [1, 1.08]);
  const bgOpacity   = useTransform(scrollY, [300, 750], [1, 0]);
  const contentY       = useTransform(scrollY, [60, 700], [0, -100]);
  const contentOpacity = useTransform(scrollY, [60, 480], [1, 0]);

  return (
    <div className={`w-full ${className}`}>
      {/* ── Hero image area ── */}
      <section
        className={`sticky top-0 z-0 w-full overflow-hidden bg-[#050e1a] ${sectionHeight}`}
      >
        {/* Background image — parallax scale + fade */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: bgOpacity }}
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ y: bgY, scale: bgScale }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

        {/* Gradient — transparent at top, dark at bottom where text lives */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0) 68%)",
          }}
        />

        {/* Decorative corner images */}
        <div className="h-1/2 absolute w-full bottom-0 grid grid-cols-3 pointer-events-none">
          <div className="relative -left-1/2 top-1/3">
            <Image
              src="/images/home/hero/left.png"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </div>
          <div />
          <div className="relative -right-1/2 top-1/2">
            <Image
              src="/images/home/hero/right.png"
              alt=""
              fill
              className="select-none object-cover overflow-visible"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content — fades + rises on scroll */}
        <motion.div
          className="absolute top-2/3 z-10 left-1/2 -translate-x-1/2 w-full will-change-transform"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <Container>
            {children}
            <div className="w-24 h-1 bg-brand-gold-dark mb-5" />
            {hasBread && (
              <nav
                aria-label="Breadcrumb"
                className="bg-white/10 backdrop-blur-sm border-t border-white/15 w-fit rounded-e-full"
              >
                <div className="flex items-center gap-1.5 py-2 px-3">
                  {breadcrumbs.map((crumb, i) => {
                    const isLast = i === breadcrumbs.length - 1;
                    const isHome = i === 0 && crumb.label.toLowerCase() === "home";
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
                            {isHome && <Home size={11} strokeWidth={2} />}
                            {isHome ? null : crumb.label}
                          </Link>
                        ) : (
                          <span className="font-sans text-xs font-medium text-brand-gold-dark whitespace-nowrap">
                            {crumb.label}
                          </span>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </nav>
            )}
            <h1 className="font-agatho text-[80px] font-bold leading-[1.05] text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="font-sans text-[16px] leading-6 text-white/80 max-w-130">
                {subtitle}
              </p>
            )}
          </Container>
        </motion.div>
      </section>
    </div>
  );
}
