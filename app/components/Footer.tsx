import Image from "next/image";
import Link from "next/link";
import {
  CircleCheckBigIcon,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "./ui/Container";

const quickLinks = [
  "About Us",
  "Courses",
  "Campuses",
  "Student Support",
  "Contact",
];

const resources = ["News", "Blogs", "Events", "Gallery"];

const otherLinks = ["Accomodations", "Packages", "Faculty & Staffs", "Gallery"];

const social = [
  { Icon: CircleCheckBigIcon, label: "WhatsApp", active: false },
  { Icon: CircleCheckBigIcon, label: "Instagram", active: false },
  { Icon: CircleCheckBigIcon, label: "Facebook", active: true },
  { Icon: CircleCheckBigIcon, label: "LinkedIn", active: false },
  { Icon: CircleCheckBigIcon, label: "Twitter", active: false },
];

const legalLinks = ["Disclaimer", "Privacy Policy", "Terms & Conditions"];

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white">
      {/* ── Links + Contact ────────────────────────────────── */}
      <Container className="py-16">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.6fr] gap-8">
          {/* Quick links */}
          <div>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Quick links
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {quickLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Resources
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {resources.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other link */}
          <div>
            <h4 className="font-sans font-medium text-[16px] text-white mb-7">
              Other link
            </h4>
            <ul className="flex flex-col gap-[18px]">
              {otherLinks.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="font-sans text-[14px] text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-7">
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0 mt-0.5"
              />
              <p className="font-sans text-[14px] leading-[24px] text-[#9ca3af]">
                Main Campus:&nbsp; Level 1, 120 Miller Street,
                <br />
                West Melbourne, VIC 3003
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0"
              />
              <p className="font-sans text-[14px] text-[#9ca3af]">
                1800 902 480
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail
                size={20}
                strokeWidth={1.5}
                className="text-white flex-shrink-0"
              />
              <p className="font-sans text-[14px] text-[#9ca3af]">
                info@riverdaleinstitute.edu.au
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t border-[#2d2d2d]" />

      {/* ── Social icons ───────────────────────────────────── */}
      <div className="flex items-center justify-center gap-4 py-10">
        {social.map(
          ({
            Icon,
            label,
            active,
          }: {
            Icon: LucideIcon;
            label: string;
            active: boolean;
          }) => (
            <Link
              key={label}
              href="#"
              aria-label={label}
              className={`w-[58px] h-[58px] rounded-full flex items-center justify-center border transition-colors ${
                active
                  ? "bg-white border-white text-[#1c1c1c]"
                  : "border-[#404040] text-white hover:border-white"
              }`}
            >
              <Icon size={22} strokeWidth={1.5} />
            </Link>
          ),
        )}
      </div>

      {/* ── Logo + watermark + bottom bar ──────────────────── */}
      <div className="relative overflow-hidden">
        {/* "STOCKDALE" watermark — barely visible behind logo */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span
            className="font-agatho font-bold tracking-[0.18em] whitespace-nowrap"
            style={{ fontSize: 190, color: "rgba(255,255,255,0.04)" }}
          >
            STOCKDALE
          </span>
        </div>

        {/* Logo block */}
        <div className="relative flex flex-col items-center py-10 gap-3 z-10">
          <Image
            src="/images/logo/secondary.svg"
            alt="Stockdale Higher Education Institute"
            width={240}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Bottom copyright / legal bar */}
        <div className="border-t border-[#2d2d2d] relative z-10">
          <Container>
            <div className="flex items-center justify-between py-5">
              <p className="font-sans text-[12px] text-[#6b7280]">
                &copy;&nbsp;2026 Stockdale University. All Rights Reserved.
              </p>
              <div className="flex items-center gap-8">
                {legalLinks.map((l) => (
                  <Link
                    key={l}
                    href="#"
                    className="font-sans text-[12px] text-[#6b7280] hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
