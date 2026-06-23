import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Section from "./ui/Section";

export default function FeaturedProgram() {
  return (
    <Section
      className="relative overflow-hidden bg-[#f8f5eb]"
      containerClassName="flex items-center"
    >
      {/* Image — absolute to Section (Container has no position:relative), bleeds to right edge */}
      <div className="absolute inset-y-0 right-0 w-[52%]">
        <Image
          src="/images/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          alt="Students studying together"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Text content — in normal flow inside Container */}
      <div className="relative z-10 flex flex-col gap-6 max-w-[400px]">
        <h2 className="font-agatho font-bold text-[45px] leading-tight text-[#014f3d]">
          Bachelor of
          <br />
          Information Technology
        </h2>

        <p className="font-sans text-[16px] leading-[1.5] text-[#767676] max-w-[375px]">
          In today's rapidly evolving digital landscape, data analytics has
          become a crucial skill across various industries. The Bachelor of
          Information Technology (BIT) with a specialisation in Data Analytics
          addresses the growing need for professionals who can harness the power
          of data to drive business innovation and decision-making.
        </p>

        <button
          className="self-start flex items-center gap-2 px-5 py-[14px] rounded-[8px] text-white text-[14px] font-sans whitespace-nowrap"
          style={{
            background:
              "linear-gradient(177.19deg, #43A48E 0.56%, #014F3D 36.4%, #013529 89.05%)",
          }}
        >
          Know more
          <ChevronRight size={14} strokeWidth={2} />
        </button>
      </div>
    </Section>
  );
}
