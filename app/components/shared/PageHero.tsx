import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
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
  // const sectionHeight = !hasBread ? "min-h-screen" : "min-h-[calc(100vh-72px)]";
  const sectionHeight = !hasBread ? "min-h-screen" : "min-h-screen";
  return (
    <div className={`w-full ${className}`}>
      {/* ── Hero image area ── */}
      <section
        className={`relative w-full overflow-hidden bg-[#050e1a] ${sectionHeight}`}
      >
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

        {/* Gradient — transparent at top, dark at bottom where text lives */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0) 68%)",
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

        {/* Breadcrumbs — full-width frosted bar pinned to bottom of hero */}

        {/* Content */}
        <Container className="absolute top-2/3 z-10 left-1/2 -translate-x-1/2">
          {children}
          <div className="w-24 h-1 bg-brand-gold-dark mb-5" />

          <h1 className="font-agatho text-[80px] font-bold leading-[1.05] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-[16px] leading-6 text-white/80 max-w-130">
              {subtitle}
            </p>
          )}
        </Container>
      </section>

      {/* ── Breadcrumb strip ── */}
      {hasBread && (
        <nav
          aria-label="Breadcrumb"
          className="absolute bottom-0 bg-white/10 backdrop-blur-sm border-t border-white/15 w-full z-1 2xl:z-0"
        >
          <Container className="flex items-center gap-1.5 py-3 px-3">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              // const isHome = i === 0 && crumb.label.toLowerCase() === "home";
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
                    <span className="flex items-center  justify-center font-sans text-xs text-white whitespace-nowrap">
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
