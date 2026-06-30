import { Award, BookOpen, Users, FlaskConical, Lightbulb, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/app/components/ui/Container";

const SCHOLARSHIPS = [
  {
    icon: Award,
    name: "Academic Excellence Scholarship",
    description:
      "For students who demonstrate outstanding academic achievement on their pathway to, or during, study at Stockdale.",
  },
  {
    icon: BookOpen,
    name: "Information Technology Scholarship",
    description:
      "Supports students enrolling in the Bachelor of Information Technology (Data Analytics) at Stockdale.",
  },
  {
    icon: Users,
    name: "Community Leaders Scholarship",
    description:
      "Recognises students who have made a meaningful contribution to their communities through leadership and service.",
  },
  {
    icon: Globe,
    name: "Equity & Access Scholarship",
    description:
      "Supports students from underrepresented or disadvantaged backgrounds to access higher education opportunities.",
  },
  {
    icon: Lightbulb,
    name: "Technology & Innovation Scholarship",
    description:
      "For students who are passionate about using technology to solve real-world problems and drive innovation.",
  },
  {
    icon: FlaskConical,
    name: "Postgraduate Pathway Scholarship",
    description:
      "For students intending to progress to a Stockdale postgraduate program once our postgraduate offerings launch.",
  },
];

export default function AvailableScholarships() {
  return (
    <section className="bg-[#fafafa] py-16 border-t border-gray-100">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-light text-brand-green-darkest text-[11px] font-sans font-semibold uppercase tracking-wide mb-4">
            Scholarships
          </span>
          <h2 className="font-agatho text-[44px] leading-[52px] text-black">
            Scholarship{" "}
            <span className="text-brand-gold-dark">Support</span>
          </h2>
          <p className="font-sans text-[16px] leading-7 text-brand-gray mt-3 max-w-xl mx-auto">
            We offer a range of scholarships designed to support ambitious
            domestic and international students. Eligibility and value are
            assessed individually - contact us and our team will be in touch
            about the scholarships you may be eligible for.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOLARSHIPS.map(({ icon: Icon, name, description }) => (
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
            </div>
          ))}
        </div>

        {/* Contact CTA - students enquire and we follow up with scholarship details */}
        <div className="mt-12 rounded-2xl bg-brand-green-darkest px-8 py-12 text-center">
          <h3 className="font-agatho text-[30px] leading-tight text-white mb-3">
            Contact Us for Scholarship Details
          </h3>
          <p className="font-sans text-[15px] leading-7 text-white/75 max-w-2xl mx-auto mb-7">
            Register your interest and our admissions team will contact you to
            discuss the scholarships you may be eligible for, the value
            available, and how to apply for your intake.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold-dark text-brand-green-darkest font-sans font-semibold text-[14px] px-7 py-3 rounded-full hover:bg-brand-gold transition-colors"
          >
            Contact Us for Scholarship Details
            <ArrowRight size={16} strokeWidth={2.25} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
