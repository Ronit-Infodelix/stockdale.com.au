import { Award, BookOpen, Users, FlaskConical, Lightbulb, Globe } from "lucide-react";
import Container from "@/app/components/ui/Container";

const SCHOLARSHIPS = [
  {
    icon: Award,
    name: "Academic Excellence Scholarship",
    description:
      "Awarded to students who demonstrate outstanding academic achievement during their enrolment at Stockdale.",
    amount: "$8,000",
    intake: "Any Year, 2026 Intake",
  },
  {
    icon: BookOpen,
    name: "BIT/Science Studies Scholarship",
    description:
      "Supports students enrolled in the Bachelor of Information Technology or other science-related programmes.",
    amount: "$8,000",
    intake: "Any Year, 2026 Intake",
  },
  {
    icon: Users,
    name: "Community Leaders Scholarship",
    description:
      "Recognises students who have made a meaningful contribution to their communities through leadership and service.",
    amount: "$5,000",
    intake: "Any Year, 2026 Intake",
  },
  {
    icon: FlaskConical,
    name: "Postgraduate Research Scholarship",
    description:
      "Designed for high-achieving students pursuing postgraduate research qualifications at Stockdale.",
    amount: "$10,000",
    intake: "Any Year, 2026 Intake",
  },
  {
    icon: Globe,
    name: "Equity & Access Scholarship",
    description:
      "Supports students from underrepresented or disadvantaged backgrounds to access higher education opportunities.",
    amount: "$7,500",
    intake: "Any Year, 2026 Intake",
  },
  {
    icon: Lightbulb,
    name: "Technology & Innovation Scholarship",
    description:
      "For students who are passionate about leveraging technology to solve real-world problems and drive innovation.",
    amount: "$6,500",
    intake: "Any Year, 2026 Intake",
  },
];

export default function AvailableScholarships() {
  return (
    <section className="bg-[#fafafa] py-16 border-t border-gray-100">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-light text-brand-green-darkest text-[11px] font-sans font-semibold uppercase tracking-wide mb-4">
            Our Programs
          </span>
          <h2 className="font-agatho text-[44px] leading-[52px] text-black">
            Available{" "}
            <span className="text-brand-gold-dark">Scholarships</span>
          </h2>
          <p className="font-sans text-[16px] leading-7 text-brand-gray mt-3 max-w-xl mx-auto">
            Our scholarship programmes are designed to support your profile
            and academic goals.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARSHIPS.map(({ icon: Icon, name, description, amount, intake }) => (
            <div
              key={name}
              className="bg-white border border-[#e8d48b] rounded-xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-[#fdf3d0] flex items-center justify-center shrink-0">
                <Icon size={18} strokeWidth={1.5} className="text-brand-gold-dark" />
              </div>

              {/* Name */}
              <h3 className="font-sans font-bold text-[15px] leading-5 text-black">{name}</h3>

              {/* Description */}
              <p className="font-sans text-[13px] leading-5 text-brand-gray flex-1">
                {description}
              </p>

              {/* Amount + intake */}
              <div className="pt-2 border-t border-gray-100">
                <p className="font-sans font-bold text-[16px] text-brand-gold-dark">
                  Up to {amount}
                </p>
                <p className="font-sans text-[12px] text-brand-gray">{intake}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
