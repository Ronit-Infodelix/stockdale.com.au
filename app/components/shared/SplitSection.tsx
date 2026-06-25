import { type ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Cta {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SplitSectionProps {
  /** Small pill label above the title e.g. "Who we are?" */
  badge?: string;
  /** Section heading */
  title: string;
  /** Body copy — pass a string[] for multiple paragraphs */
  body: string | string[];
  /** Image URL */
  image: string;
  imageAlt?: string;
  /** Which side the image sits on (default: left) */
  imagePosition?: "left" | "right";
  /** Optional CTA rendered below the body */
  cta?: Cta;
  /** Extra content slot below body (stats, logos, etc.) */
  children?: ReactNode;
  className?: string;
}

export default function SplitSection({
  badge,
  title,
  body,
  image,
  imageAlt = "",
  imagePosition = "left",
  cta,
  children,
  className = "",
}: SplitSectionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const imageLeft = imagePosition === "left";

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className={`flex flex-col lg:flex-row ${imageLeft ? "" : "lg:flex-row-reverse"}`}>

        {/* ── Image column ── */}
        <div className="relative w-full lg:w-[55%] min-h-[360px] lg:min-h-[520px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* ── Text column ── */}
        <div className="flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-20 w-full lg:w-[45%]">

          {/* Badge pill */}
          {badge && (
            <span className="inline-flex self-start items-center px-3 py-1 rounded-[4px] bg-brand-green-light text-[10px] font-sans text-black mb-5">
              {badge}
            </span>
          )}

          {/* Title */}
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
            {title}
          </h2>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-[16px] leading-7 text-[#767676]">
                {p}
              </p>
            ))}
          </div>

          {/* Extra slot */}
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
      </div>
    </section>
  );
}
