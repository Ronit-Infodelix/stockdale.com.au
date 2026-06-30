"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Search, X, Menu } from "lucide-react";
import Container from "../../../components/ui/Container";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const utilityLinks = [
  { label: "Agents", href: "/agent-login" },
  { label: "Contact Us", href: "/contact" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Student Login", href: "/student-login" },
];

const navLinks = [
  {
    label: "About us",
    items: [
      { label: "About Stockdale", href: "/about-us" },
      { label: "Our Team", href: "/our-team" },
      { label: "Our Campus", href: "/our-campus" },
      { label: "News & Events", href: "/news-and-events" },
    ],
  },
  {
    label: "Study With Us",
    items: [
      { label: "Bachelor of IT", href: "/bachelor-of-it" },
      { label: "Graduation Courses", href: "/graduation-courses" },
      { label: "Graduate Attributes", href: "/graduate-attributes" },
      { label: "Learning & Teaching", href: "/learning-and-teaching" },
      { label: "Credit & RPL", href: "/credit-and-rpl" },
    ],
  },
  {
    label: "Admission & Entry",
    items: [
      { label: "Admission", href: "/admission" },
      { label: "How to Apply", href: "/how-to-apply" },
      { label: "Domestic Students", href: "/domestic-students" },
      { label: "International Students", href: "/international-students" },
      { label: "Fees & Charges", href: "/fees-refunds-and-charges" },
      { label: "Scholarships", href: "/scholarships" },
    ],
  },
  {
    label: "Student Life",
    items: [
      { label: "Melbourne Life", href: "/melbourne-life" },
      { label: "Library & Databases", href: "/library-and-databases" },
      { label: "Staying Safe", href: "/staying-safe" },
      { label: "Student Handbook", href: "/student-handbook" },
      { label: "Policies & Procedures", href: "/policies-and-procedures" },
    ],
  },
  {
    label: "Industry & Partners",
    items: [
      { label: "Industry", href: "/industry" },
      { label: "Partners", href: "/partners" },
    ],
  },
];

const SPRING = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();

  // Single source of truth — all scroll-driven values read the same MotionValue
  // so logo resize, nav height, and button reveal are physically impossible to desync.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const utilBarH   = useTransform(scrollY, [0, 50], [40, 0]);
  // Desktop
  const navBarH    = useTransform(scrollY, [0, 50], [100, 72]);
  const logoW      = useTransform(scrollY, [0, 50], [300, 240]);
  const logoH      = useTransform(scrollY, [0, 50], [88, 66]);
  // Mobile — smaller range
  const navBarH_m  = useTransform(scrollY, [0, 50], [64, 54]);
  const logoW_m    = useTransform(scrollY, [0, 50], [150, 120]);
  const logoH_m    = useTransform(scrollY, [0, 50], [44, 36]);
  const actMaxW    = useTransform(scrollY, [24, 70], [0, 280]);
  const actOpacity = useTransform(scrollY, [24, 70], [0, 1]);
  const navBg      = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,1)", "rgba(255,255,255,0.9)"],
  );
  const navShadow = useTransform(scrollY, (y) => {
    const t = Math.min(1, Math.max(0, y / 50));
    return `0 4px 24px rgba(1,53,41,${(t * 0.1).toFixed(3)}), 0 1px 4px rgba(0,0,0,${(t * 0.06).toFixed(3)})`;
  });
  const navBlur = useTransform(scrollY, (y) => {
    const t = Math.min(1, Math.max(0, y / 50));
    return t > 0 ? `blur(${(t * 12).toFixed(1)}px)` : "none";
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
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
    if (!scrolled) setSearchOpen(false);
  }, [scrolled]);

  return (
    <motion.header
      className="w-full fixed top-0 z-50"
      initial={{ y: "-110%", opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.65, ease: SPRING }}
    >
      {/* Utility bar — desktop only */}
      <motion.div
        className="bg-brand-green-darkest overflow-hidden hidden lg:block"
        style={{ height: utilBarH }}
      >
        <Container className="h-10 flex items-center justify-end">
          <div className="flex items-center gap-6">
            {utilityLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-sm font-sans hover:text-brand-gold transition-colors duration-150 whitespace-nowrap"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateX(0)" : "translateX(18px)",
                  transition: `opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)`,
                  transitionDelay: mounted
                    ? `${60 + (utilityLinks.length - 1 - i) * 55}ms`
                    : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <span
              className="text-white text-sm font-sans font-medium cursor-pointer hover:text-brand-gold transition-colors duration-150 select-none"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)`,
                transitionDelay: mounted ? "60ms" : "0ms",
              }}
            >
              EN
            </span>
          </div>
        </Container>
      </motion.div>

      {/* Main nav */}
      <motion.div
        style={{
          height: isMobile ? navBarH_m : navBarH,
          backgroundColor: navBg,
          boxShadow: navShadow,
          backdropFilter: navBlur,
        }}
      >
        <Container className="h-full flex items-center justify-between">

          {/* Logo: entrance scale-in, then scroll-driven resize in sync with nav */}
          <Link href="/" className="shrink-0">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={mounted ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: SPRING, delay: 0.06 }}
            >
              <motion.div className="relative" style={{ width: isMobile ? logoW_m : logoW, height: isMobile ? logoH_m : logoH }}>
                <Image
                  src="/images/logo/main.svg"
                  alt="Stockdale"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop nav */}
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
                    transition: `opacity 0.45s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)`,
                    transitionDelay: mounted ? `${220 + i * 75}ms` : "0ms",
                  }}
                >
                  <button className="group flex items-center gap-[5px] font-sans text-[15px] font-medium whitespace-nowrap text-brand-black hover:text-brand-green-dark transition-colors duration-200">
                    <span className="relative pb-0.5">
                      {link.label}
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

                  {/* Dropdown panel — pt-4 bridges the gap so hover isn't lost */}
                  <div
                    className="absolute top-full left-0 pt-4 w-56"
                    style={{
                      opacity: activeDropdown === link.label ? 1 : 0,
                      pointerEvents:
                        activeDropdown === link.label ? "auto" : "none",
                      transition: `opacity 0.2s ease`,
                    }}
                  >
                    <div
                      className="bg-white rounded-xl overflow-hidden origin-top"
                      style={{
                        transform:
                          activeDropdown === link.label
                            ? "scaleY(1) translateY(0)"
                            : "scaleY(0.92) translateY(-6px)",
                        transition: `transform 0.22s cubic-bezier(0.22,1,0.36,1)`,
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
                </div>
              ))}
            </nav>

            {/* Actions — single motion container, no per-child desync */}
            <motion.div
              className="overflow-hidden"
              style={{
                maxWidth: actMaxW,
                opacity: actOpacity,
                pointerEvents: scrolled ? "auto" : "none",
              }}
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                {/* Search */}
                <div
                  className="flex items-center overflow-hidden"
                  style={{
                    width: searchOpen ? 180 : 36,
                    transition: `width 0.3s cubic-bezier(0.22,1,0.36,1)`,
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
            </motion.div>
          </div>

          {/* Mobile hamburger */}
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
      </motion.div>

      {/* Mobile drawer */}
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
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-sans text-brand-gray hover:text-brand-green-darkest transition-colors duration-150"
              >
                {link.label}
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
    </motion.header>
  );
}
