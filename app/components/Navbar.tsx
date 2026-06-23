import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

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
      <div className="bg-brand-green-darkest h-11 flex items-center justify-end px-30 gap-6">
        {utilityLinks.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-white text-sm font-sans hover:text-brand-gold transition-colors whitespace-nowrap"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Main nav */}
      <div className="bg-white h-[120px] flex items-center justify-between px-30">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="relative h-[88px] w-[300px]">
            <Image
              src="/images/logo/main.png"
              alt="Stockdale"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </div>
        </Link>

        {/* Nav links + language */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm font-sans font-medium text-brand-black hover:text-brand-green-dark transition-colors whitespace-nowrap"
            >
              {link}
            </button>
          ))}
          <span className="text-sm font-sans font-medium text-brand-black">EN</span>
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
          <button
            className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-brand-gold"
            aria-label="Search"
          >
            <Search size={14} strokeWidth={2} color="white" />
          </button>
        </div>
      </div>
    </header>
  );
}
