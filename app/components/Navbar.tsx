import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import Container from "./ui/Container";

const utilityLinks = ["Agents", "Contact Us", "Scholarships", "Student Login"];

const navLinks = [
  "About us",
  "Student Life",
  "Study With Us",
  "Admission & Entry",
  "Industry & Partners",
];

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Utility bar */}
      <div className="bg-brand-green-darkest h-10">
        <Container className="h-full flex items-center justify-end gap-6">
          {utilityLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-white text-sm font-sans hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              {link}
            </Link>
          ))}
        </Container>
      </div>

      {/* Main nav */}
      <div className="bg-white h-25">
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="relative h-22 w-75">
              <Image
                src="/images/logo/main.svg"
                alt="Stockdale"
                fill
                priority
              />
            </div>
          </Link>
          <div className="flex justify-between gap-10">
            {/* Nav links + language */}
            <nav className="flex items-center gap-5">
              {navLinks.map((link) => (
                <button
                  key={link}
                  className="text-sm font-sans font-medium text-brand-black hover:text-brand-green-dark transition-colors whitespace-nowrap"
                >
                  {link}
                </button>
              ))}
              <span className="text-sm font-sans font-medium text-brand-black">
                EN
              </span>
            </nav>

            {/* Apply Now + Search */}
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-[10px] px-[17px] py-[10px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(176.49deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Apply Now
                <ChevronRight size={14} strokeWidth={2} />
              </button>

              {/* Search */}
              <button aria-label="Search">
                <Search
                  size={20}
                  strokeWidth={2}
                  className="text-brand-gold-dark"
                />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
