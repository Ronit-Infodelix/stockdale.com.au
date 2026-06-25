import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  const sectionHeight = !hasBread ? "min-h-screen" : "min-h-[calc(100vh-72px)]";
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
        <div className="bg-gray-light border-b border-gray-100 h-18">
          <Container className="py-2 flex items-center h-full gap-1.5">
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <Fragment key={crumb.label}>
                  {i > 0 && (
                    <ChevronRight
                      size={13}
                      strokeWidth={2}
                      className="text-black shrink-0"
                    />
                  )}
                  {!isLast && crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="font-sans text-black hover:text-brand-green-dark transition-colors duration-150 whitespace-nowrap"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={`font-sans whitespace-nowrap ${isLast ? "text-brand-gray" : "text-black"}`}
                    >
                      {crumb.label}
                    </span>
                  )}
                </Fragment>
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
}
