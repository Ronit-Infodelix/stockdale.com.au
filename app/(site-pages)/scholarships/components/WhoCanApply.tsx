import { CheckCircle } from "lucide-react";
import Container from "@/app/components/ui/Container";

const CRITERIA = [
  {
    title: "GPA or Standing",
    description:
      "Most scholarships require a minimum GPA or academic standing. Check each award for the specific threshold that applies.",
  },
  {
    title: "Academic Profile",
    description:
      "Applicants must be enrolled or intending to enrol in an eligible programme at Stockdale for the relevant intake year.",
  },
  {
    title: "Completion Rate",
    description:
      "Students must maintain satisfactory academic progress and unit completion rates to retain their scholarship.",
  },
  {
    title: "Community or Professional Involvement",
    description:
      "Some scholarships prioritise students who have demonstrated active involvement in their professional field or local community.",
  },
  {
    title: "Supporting Statement",
    description:
      "A personal statement outlining your goals, circumstances, and reason for applying is required for most awards.",
  },
  {
    title: "Application Deadline",
    description:
      "Applications typically close several weeks before each intake. Late submissions will not be considered.",
  },
];

export default function WhoCanApply() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-brand-green-light text-brand-green-darkest text-[11px] font-sans font-semibold uppercase tracking-wide mb-4">
            Explore
          </span>
          <h2 className="font-agatho text-[44px] leading-[52px] text-black mb-3">
            Who Can Apply?
          </h2>
          <p className="font-sans text-[16px] leading-7 text-brand-gray max-w-xl mx-auto">
            Each scholarship has specific criteria. The general requirements listed apply unless
            otherwise shown on the programme.
          </p>
        </div>

        {/* Criteria grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {CRITERIA.map(({ title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-0 mt-0.5">
                <CheckCircle
                  size={20}
                  strokeWidth={1.5}
                  className="text-brand-gold-dark"
                  fill="#fdf3d0"
                />
              </div>
              <div>
                <p className="font-sans font-bold text-[15px] leading-6 text-black mb-1">
                  {title}
                </p>
                <p className="font-sans text-[14px] leading-6 text-brand-gray">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
