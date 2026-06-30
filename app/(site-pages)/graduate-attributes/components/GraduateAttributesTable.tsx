import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const ATTRIBUTES = [
  {
    attribute: "Application of discipline knowledge and skills",
    description:
      "Demonstrate mastery of their field of expertise in knowledge, skills, and their application with the ability to independently gain and maintain contemporary professional skills and knowledge.",
  },
  {
    attribute: "Analytical skills",
    description:
      "Collect, analyse, and critically evaluate sources, values, validity and currency of information and to summarise such information.",
  },
  {
    attribute: "Innovative and critical thinking, and problem solving",
    description:
      "Apply critical, reflective and innovative thinking to generate appropriate, evidence-based solutions to both theoretical and real-world problems in the domain.",
  },
  {
    attribute: "Communication",
    description:
      "Communicate convincingly in diverse contexts to a range of audiences.",
  },
  {
    attribute: "Cultural and global competency",
    description:
      "Acknowledge and respect diverse cultures of peoples and their approaches to work and/or problem solving and/or consulting, within the broader global context.",
  },
  {
    attribute: "Professionalism and professional leadership",
    description:
      "Demonstrate persuasive professional leadership and professionalism with a socially responsible consciousness.",
  },
  {
    attribute: "Fiduciary and ethical practice",
    description:
      "Maintain the fiduciary and ethical professional standards expected by society and/or professional bodies.",
  },
  {
    attribute: "Collaboration",
    description:
      "Work effectively in team-based roles and demonstrate collaboration across diverse teams.",
  },
] as const;

export default function GraduateAttributesTable() {
  return (
    <Section className="bg-white py-16">
      <Container>
        <div className="w-full border border-[#d9d9d9]">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_2fr] bg-brand-green-darkest">
            <div className="px-8 py-5 border-r border-white/20">
              <span className="font-sans font-bold text-[20px] leading-7 text-white uppercase tracking-wide">
                Attribute
              </span>
            </div>
            <div className="px-8 py-5">
              <span className="font-sans font-bold text-[20px] leading-7 text-white uppercase tracking-wide">
                Description
              </span>
            </div>
          </div>

          {/* Data rows */}
          {ATTRIBUTES.map(({ attribute, description }, i) => {
            const isEven = i % 2 !== 0;
            return (
              <div
                key={attribute}
                className={[
                  "grid grid-cols-[1fr_2fr] border-t border-[#d9d9d9]",
                  isEven ? "bg-[#f0f0f0]" : "bg-white",
                ].join(" ")}
              >
                <div className="px-8 py-6 border-r border-[#d9d9d9]">
                  <p className="font-sans text-[16px] leading-[35px] text-black">
                    {attribute}
                  </p>
                </div>
                <div className="px-8 py-6">
                  <p className="font-sans text-[16px] leading-[35px] text-black">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
