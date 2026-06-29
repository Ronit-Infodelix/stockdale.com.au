import { type ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";
import Section from "../ui/Section";
import Image from "next/image";

interface Cta {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SplitSectionProps {
  /** Small pill label above the title e.g. "Who we are?" */
  badge?: string;
  /** Icon image URL — shown in a mint-green rounded square above the title */
  icon?: string;
  /** Section heading */
  title: string;
  /** Appended to title in brand-gold — e.g. title="Our" titleAccent="Mission" */
  titleAccent?: string;
  /** Body copy — pass a string[] for multiple paragraphs */
  body: string | string[];
  /** Image URL */
  image: string;
  imageAlt?: string;
  /** Which side the image sits on (default: left) */
  imagePosition?: "left" | "right";
  /**
   * "light" — white background, dark text (default)
   * "dark"  — brand-green-darkest background, white text
   */
  variant?: "light" | "dark";
  /** Optional CTA rendered below the body */
  cta?: Cta;
  /** Extra content slot below body (stats, logos, etc.) */
  children?: ReactNode;
  className?: string;
}

export default function SplitSection({
  badge,
  icon,
  title,
  titleAccent,
  body,
  image,
  imageAlt = "",
  imagePosition = "left",
  variant = "light",
  cta,
  children,
  className = "",
}: SplitSectionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const imageLeft = imagePosition === "left";
  const dark = variant === "dark";

  return (
    <Section
      className={[
        "relative overflow-hidden",
        dark ? "bg-brand-green-darkest" : "bg-white",
        className,
      ].join(" ")}
    >
      {/* Desktop background fill for the text panel — bleeds to the page edge */}
      {dark && (
        <div
          className={[
            "hidden lg:block absolute inset-y-0 bg-brand-green-darkest",
            imageLeft ? "left-[55%] right-0" : "left-0 right-[55%]",
          ].join(" ")}
        />
      )}

      {/*
        Image: in flow on mobile (stacks above text), absolute on desktop so it
        bleeds to the viewport edge independently of the Container.
      */}
      <div
        className={[
          "relative w-full min-h-120",
          "lg:absolute lg:inset-y-0 lg:w-[55%] lg:min-h-0",
          imageLeft ? "lg:left-0" : "lg:right-0",
        ].join(" ")}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/*
        Container aligns the text with the site grid.
        A hidden spacer div reserves the image column on desktop so the text
        column starts exactly where the image ends.
      */}
      <Container
        className={`relative flex gap-10 ${imageLeft ? "" : "flex-row-reverse"}`}
      >
        {/* Spacer — mirrors image column width, invisible */}
        <div className="hidden lg:block lg:w-[55%] shrink-0" aria-hidden="true" />

        {/* Text column */}
        <div
          className={[
            "w-full lg:w-[45%]",
            imageLeft ? "lg:pl-14" : "lg:pr-14",
          ].join(" ")}
        >
          {/* Icon */}
          {icon && (
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-green-light mb-6">
              <Image src={icon} alt="" width={28} height={28} />
            </div>
          )}

          {/* Badge pill */}
          {badge && (
            <span className="inline-flex self-start items-center px-3 py-1 rounded-sm bg-brand-green-light text-[10px] font-sans text-black mb-5">
              {badge}
            </span>
          )}

          {/* Title */}
          <h2
            className={[
              "font-agatho text-[40px] leading-12.5 mb-6",
              dark ? "text-white" : "text-black",
            ].join(" ")}
          >
            {title}
            {titleAccent && (
              <> <span className="text-brand-gold-dark">{titleAccent}</span></>
            )}
          </h2>

          {/* Body */}
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={[
                  "font-sans text-[16px] leading-7",
                  dark ? "text-white/80" : "text-brand-gray",
                ].join(" ")}
              >
                {p}
              </p>
            ))}
          </div>

          {children && <div className="mt-8">{children}</div>}

          {/* CTA */}
          {cta && (
            <div className="mt-8">
              {cta.href ? (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white text-[14px] font-sans hover:opacity-90 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                  }}
                >
                  {cta.label}
                  <ChevronRight size={14} strokeWidth={2} />
                </Link>
              ) : (
                <button
                  onClick={cta.onClick}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white text-[14px] font-sans hover:opacity-90 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                  }}
                >
                  {cta.label}
                  <ChevronRight size={14} strokeWidth={2} />
                </button>
              )}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
