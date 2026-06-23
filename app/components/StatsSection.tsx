import { Briefcase, GraduationCap, Users, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./ui/Section";

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Briefcase,      value: "95%",     label: "Graduate employment rate within 6 months" },
  { icon: GraduationCap, value: "15,000+", label: "Students from 80+ countries" },
  { icon: Users,          value: "200+",    label: "Industry partnerships" },
  { icon: MapPin,         value: "15",      label: "International locations" },
];

export default function StatsSection() {
  return (
    <Section className="bg-[#f5f5f5]">

      {/* Heading + description row */}
      <div className="flex items-start justify-between mb-12">
        <h2 className="font-agatho font-bold text-[50px] leading-tight text-black shrink-0">
          Shaping Careers,<br />Empowering Success
        </h2>
        <p className="text-[#767676] text-[16px] leading-[24px] max-w-[472px] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="bg-white rounded-[20px] border border-[#e5bd1b]/50 shadow-[0px_8px_10px_0px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between h-[190px]"
          >
            {/* Icon + number */}
            <div className="flex items-center gap-3">
              <Icon size={40} strokeWidth={1.25} color="#d6a929" />
              <span className="font-agatho font-bold text-[52px] leading-none text-brand-green-darkest">
                {value}
              </span>
            </div>

            {/* Label */}
            <p className="text-[#767676] text-[14px] leading-[20px] max-w-[192px]">
              {label}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
}
