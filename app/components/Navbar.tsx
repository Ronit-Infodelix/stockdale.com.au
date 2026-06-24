"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, X, Menu } from "lucide-react";
import Container from "./ui/Container";

const utilityLinks = ["Agents", "Contact Us", "Scholarships", "Student Login"];

const navLinks = [
  {
    label: "About us",
    items: [
      { label: "Our Story", href: "#" },
      { label: "Vision & Mission", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Campus & Facilities", href: "#" },
    ],
  },
  {
    label: "Student Life",
    items: [
      { label: "Campus Culture", href: "#" },
      { label: "Clubs & Societies", href: "#" },
      { label: "Sports & Wellness", href: "#" },
      { label: "Events Calendar", href: "#" },
    ],
  },
  {
    label: "Study With Us",
    items: [
      { label: "Undergraduate", href: "#" },
      { label: "Postgraduate", href: "#" },
      { label: "Online Courses", href: "#" },
      { label: "Short Programs", href: "#" },
    ],
  },
  {
    label: "Admission & Entry",
    items: [
      { label: "How to Apply", href: "#" },
      { label: "Entry Requirements", href: "#" },
      { label: "Fees & Scholarships", href: "#" },
      { label: "International Students", href: "#" },
    ],
  },
  {
    label: "Industry & Partners",
    items: [
      { label: "Corporate Partners", href: "#" },
      { label: "Research & Innovation", href: "#" },
      { label: "Alumni Network", href: "#" },
      { label: "Work With Us", href: "#" },
    ],
  },
];

// Shared spring easing used across entrance animations
const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    // Double-rAF so the browser has committed the initial (hidden) paint before animating in
    let frame: number;
    const outer = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setMounted(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!scrolled) setSearchOpen(false);
  }, [scrolled]);

  return (
    <header
      className="w-full fixed top-0 z-50"
      style={{
        transform: mounted ? "translateY(0)" : "translateY(-110%)",
        opacity: mounted ? 1 : 0,
        transition: `transform 0.65s ${SPRING}, opacity 0.45s ease`,
      }}
    >
      {/* ── Utility bar ── */}
      <div
        className="bg-brand-green-darkest overflow-hidden"
        style={{
          height: scrolled ? 0 : 40,
          transition: "height 0.3s ease-in-out",
        }}
      >
        <Container className="h-10 flex items-center justify-end">
          {/* Utility links — right side */}
          <div className="flex items-center gap-6">
            {utilityLinks.map((link, i) => (
              <Link
                key={link}
                href="#"
                className="text-white text-sm font-sans hover:text-brand-gold transition-colors duration-150 whitespace-nowrap"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateX(0)" : "translateX(18px)",
                  // stagger right-to-left: last item (rightmost) appears first
                  transition: `opacity 0.4s ease, transform 0.5s ${SPRING}`,
                  transitionDelay: mounted
                    ? `${60 + (utilityLinks.length - 1 - i) * 55}ms`
                    : "0ms",
                }}
              >
                {link}
              </Link>
            ))}
            {/* EN language selector — left side of utility bar */}
            <span
              className="text-white text-sm font-sans font-medium cursor-pointer hover:text-brand-gold transition-colors duration-150 select-none"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.4s ease, transform 0.5s ${SPRING}`,
                transitionDelay: mounted ? "60ms" : "0ms",
              }}
            >
              EN
            </span>
          </div>
        </Container>
      </div>

      {/* ── Main nav ── */}
      <div
        className={`${scrolled ? "bg-white/90" : "bg-white"}`}
        style={{
          height: scrolled ? 76 : 100,
          boxShadow: scrolled
            ? "0 4px 24px rgba(1,53,41,0.10), 0 1px 4px rgba(0,0,0,0.06)"
            : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: `height 0.3s ease-in-out, box-shadow 0.3s ease, backdrop-filter 0.3s ease`,
        }}
      >
        <Container className="h-full flex items-center justify-between">
          {/* ── Logo: glides in from screen-center ── */}
          <Link href="/" className="shrink-0">
            {/* Entrance animation wrapper (separates from scroll-resize wrapper) */}
            <div
              style={{
                transform: mounted ? "scale(1)" : "scale(1.2)",
                opacity: mounted ? 1 : 0,
                transition: `transform 0.7s ${SPRING}, opacity 0.5s ease`,
                transitionDelay: mounted ? "60ms" : "0ms",
              }}
            >
              {/* Scroll-resize wrapper */}
              <div
                className="relative"
                style={{
                  height: scrolled ? 66 : 88,
                  width: scrolled ? 240 : 300,
                  transition: `height 0.3s ease-in-out, width 0.3s ease-in-out`,
                }}
              >
                <Image
                  src="/images/logo/main.svg"
                  alt="Stockdale"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-5">
              {navLinks.map((link, i) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(-14px)",
                    transition: `opacity 0.45s ease, transform 0.55s ${SPRING}`,
                    // links cascade left-to-right, starting after logo settles
                    transitionDelay: mounted ? `${220 + i * 75}ms` : "0ms",
                  }}
                >
                  <button className="group flex items-center gap-[5px] font-sans text-[15px] font-medium whitespace-nowrap text-brand-black hover:text-brand-green-dark transition-colors duration-200">
                    <span className="relative pb-0.5">
                      {link.label}
                      {/* Gold underline slide */}
                      <span
                        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-brand-gold"
                        style={{
                          width: activeDropdown === link.label ? "100%" : "0%",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </span>
                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
                      className="text-brand-gray"
                      style={{
                        transform:
                          activeDropdown === link.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl overflow-hidden origin-top"
                    style={{
                      opacity: activeDropdown === link.label ? 1 : 0,
                      transform:
                        activeDropdown === link.label
                          ? "scaleY(1) translateY(0)"
                          : "scaleY(0.92) translateY(-6px)",
                      pointerEvents:
                        activeDropdown === link.label ? "auto" : "none",
                      transition: `opacity 0.2s ease, transform 0.22s ${SPRING}`,
                      boxShadow:
                        "0 12px 40px rgba(1,53,41,0.14), 0 2px 8px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(1,79,61,0.08)",
                    }}
                  >
                    <div
                      className="h-[3px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #43A48E 0%, #014F3D 100%)",
                      }}
                    />
                    <div className="py-1.5">
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group/item flex items-center justify-between px-5 py-2.5 text-sm font-sans text-brand-black hover:bg-brand-green-light hover:text-brand-green-darkest transition-all duration-150"
                        >
                          {item.label}
                          <ChevronRight
                            size={13}
                            className="text-brand-green-dark opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </nav>

            {/* ── Actions — revealed on scroll ── */}
            <div
              className="overflow-hidden"
              style={{
                maxWidth: scrolled ? 280 : 0,
                opacity: scrolled ? 1 : 0,
                pointerEvents: scrolled ? "auto" : "none",
                transition: `max-width 0.5s ${SPRING}, opacity 0.35s ease`,
              }}
            >
              <div
                className="flex items-center gap-2"
                style={{ whiteSpace: "nowrap" }}
              >
                {/* Search */}
                <div
                  className="flex items-center overflow-hidden"
                  style={{
                    width: searchOpen ? 180 : 36,
                    transform: scrolled ? "translateX(0)" : "translateX(10px)",
                    opacity: scrolled ? 1 : 0,
                    transitionProperty: "width, opacity, transform",
                    transitionDuration: "0.3s, 0.35s, 0.4s",
                    transitionTimingFunction: `${SPRING}, ease, ${SPRING}`,
                    transitionDelay: scrolled ? "0ms, 0ms, 0ms" : "0ms",
                  }}
                >
                  {searchOpen ? (
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full">
                      <Search size={15} className="text-brand-gray shrink-0" />
                      <input
                        autoFocus
                        placeholder="Search…"
                        className="outline-none bg-transparent text-sm font-sans text-brand-black placeholder:text-brand-gray w-full"
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        aria-label="Close search"
                      >
                        <X
                          size={15}
                          className="text-brand-gray hover:text-brand-black transition-colors shrink-0"
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSearchOpen(true)}
                      aria-label="Open search"
                      className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-150"
                    >
                      <Search
                        size={19}
                        strokeWidth={2}
                        className="text-brand-gold-dark"
                      />
                    </button>
                  )}
                </div>

                {/* Apply Now */}
                <div
                  style={{
                    transform: scrolled ? "translateX(0)" : "translateX(14px)",
                    opacity: scrolled ? 1 : 0,
                    transition: `opacity 0.35s ease, transform 0.45s ${SPRING}`,
                    transitionDelay: scrolled ? "80ms" : "0ms",
                  }}
                >
                  <button
                    className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap hover:opacity-90 active:scale-[0.97] transition-all duration-150"
                    style={{
                      background:
                        "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                    }}
                    onClick={() =>
                      window.dispatchEvent(new CustomEvent("open-apply"))
                    }
                  >
                    Apply Now
                    <ChevronRight size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-150"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                opacity: mobileOpen ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.2s ease",
              }}
            >
              <Menu size={22} className="text-brand-black" />
            </span>
            <span
              style={{
                opacity: mobileOpen ? 1 : 0,
                position: "absolute",
                transition: "opacity 0.2s ease",
              }}
            >
              <X size={22} className="text-brand-black" />
            </span>
          </button>
        </Container>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
        style={{
          maxHeight: mobileOpen ? 600 : 0,
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <Container className="py-3 flex flex-col gap-0.5 pb-6">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() =>
                  setMobileExpanded(
                    mobileExpanded === link.label ? null : link.label,
                  )
                }
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-sans font-medium text-brand-black hover:text-brand-green-dark hover:bg-gray-50 rounded-lg transition-colors duration-150"
              >
                {link.label}
                <ChevronDown
                  size={14}
                  className="text-brand-gray"
                  style={{
                    transform:
                      mobileExpanded === link.label
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              <div
                className="overflow-hidden"
                style={{
                  maxHeight: mobileExpanded === link.label ? 240 : 0,
                  transition: "max-height 0.2s ease-in-out",
                }}
              >
                {link.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2.5 px-6 py-2.5 text-sm font-sans text-brand-gray hover:text-brand-green-darkest transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-gray-100 mt-2 pt-3 grid grid-cols-2 gap-1">
            {utilityLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-sans text-brand-gray hover:text-brand-green-darkest transition-colors duration-150"
              >
                {link}
              </Link>
            ))}
          </div>

          <button
            className="mt-3 flex items-center justify-center gap-[10px] px-[17px] py-[12px] rounded-[8px] text-white text-[14px] font-sans hover:opacity-90 active:scale-[0.97] transition-all duration-150"
            style={{
              background:
                "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
            }}
          >
            Apply Now
            <ChevronRight size={14} strokeWidth={2} />
          </button>
        </Container>
      </div>
    </header>
  );
}
