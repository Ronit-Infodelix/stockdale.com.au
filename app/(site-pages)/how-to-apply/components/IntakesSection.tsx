import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

const BULLETS = [
  "3 intakes per year — Feb, Jul, Oct",
  "Up to 30% scholarship for high-achieving applicants",
  "Flexible payment plans & interest-free instalments",
  "Dedicated student visa & arrival support",
];

function GoldBullet({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-[18px] min-h-[38px]">
      <span className="w-2 h-2 rounded-[4px] bg-[#e6b820] shrink-0" />
      <span className="font-sans text-[14px] leading-[22px] text-[#2d2d2d]">{text}</span>
    </li>
  );
}

export default function IntakesSection() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-[#d8eee6] text-[#0a3e30] text-[12px] font-sans font-medium w-fit">
              Key dates &amp; fees
            </span>
            <h2 className="font-agatho text-[36px] leading-[42px] text-[#0a0a0a] tracking-tight">
              Intakes &amp; Scholarships
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-[29px] text-[#6b7280]">
              <p>
                Stockdale offers three main intakes each year — February, July and October — across
                most undergraduate and graduate programs. Short courses and professional
                certificates have rolling intakes.
              </p>
              <p>
                We&apos;re proud to offer a range of merit-based scholarships, early-bird discounts
                and country-specific bursaries to support outstanding students. Speak with our team
                to find out which you may be eligible for.
              </p>
            </div>

            <ul className="flex flex-col mt-1">
              {BULLETS.map((item) => (
                <GoldBullet key={item} text={item} />
              ))}
            </ul>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[14px] font-sans font-medium uppercase tracking-[0.84px] hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(178deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
                }}
              >
                Enquire about fees
                <ChevronRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[590/495] rounded-xl overflow-hidden">
            <Image
              src="/images/how-to-apply/Scholarships.webp"
              alt="Intakes and scholarships"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
