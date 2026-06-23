import { ChevronRight, GraduationCap, BookOpen, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./ui/Section";
import Image from "next/image";

const cards: {
  icon: LucideIcon;
  title: string;
  gradient: string;
}[] = [
  {
    icon: GraduationCap,
    title: "Employment-connected Degrees",
    gradient:
      "linear-gradient(197.37deg, #43A48E 6.72%, #014F3D 33.41%, #013529 76.76%)",
  },
  {
    icon: BookOpen,
    title: "The Stockdale Integrated Capability Framework",
    gradient:
      "linear-gradient(174.01deg, #43A48E 0.56%, #014F3D 36.40%, #013529 89.05%)",
  },
  {
    icon: Network,
    title: "An Education–Employment Ecosystem",
    gradient:
      "linear-gradient(156.39deg, #43A48E 7.21%, #014F3D 42.32%, #013529 80.25%)",
  },
];

export default function LearnSkills() {
  return (
    <Section
      className="bg-[#f9f9f9]"
      containerClassName="flex flex-col items-center gap-12"
    >
      <div className="absolute inset-0  w-full h-full">
        <Image
          src="/images/bg/map.png"
          alt=""
          fill
          className="object-contain pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="bg-[#cdeae3] text-black text-[10px] font-sans px-3 py-1 rounded-[4px]">
          What sets us apart
        </span>
        <h2 className="font-agatho font-bold text-[50px] leading-tight text-black">
          Learn Skills for the Real World
        </h2>
        <p className="font-sans text-[16px] leading-[24px] text-[#767676] max-w-[517px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 w-full">
        {cards.map(({ icon: Icon, title, gradient }) => (
          <div
            key={title}
            className="flex flex-col justify-between min-h-[262px] rounded-[30px] border-b-4 border-[#d6a929] p-8"
            style={{ background: gradient }}
          >
            {/* Icon in frosted box */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-[8px] bg-white/15">
                <Icon size={20} strokeWidth={1.5} color="white" />
              </div>

              {/* Title */}
              <h3 className="font-agatho font-bold text-[40px] leading-[0.9] text-white tracking-[-0.4px]">
                {title}
              </h3>
            </div>

            {/* Know more */}
            <button className="flex items-center gap-1.5 text-white text-[14px] font-sans self-start">
              Know more
              <ChevronRight size={13} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
