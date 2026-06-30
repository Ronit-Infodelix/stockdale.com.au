import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const ACCESS_ITEMS = [
  "Core textbooks and unit readings",
  "eBooks, journals, and academic databases",
  "Quiet and group study spaces",
  "Printing and scanning facilities",
  "Research and study-skills support",
];

export default function LibraryContent() {
  return (
    <Section className="bg-white">
      <Container>
        {/* Intro */}
        <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-4">
          Stockdale Library
        </h2>
        <p className="font-sans text-[16px] leading-7 text-brand-gray max-w-xl mb-12">
          The Stockdale Library provides on-campus and online access to the
          resources you need to succeed.
        </p>

        {/* Access */}
        <h3 className="font-agatho text-[40px] leading-[50px] text-black mb-4">
          Access
        </h3>
        <ul className="list-disc pl-6 mb-3">
          {ACCESS_ITEMS.map((item) => (
            <li
              key={item}
              className="font-sans font-medium text-[16px] leading-10 text-black"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="font-sans italic text-[16px] leading-10 text-brand-gray mb-12">
          Note: Library login link will go live for semester 2 2026.
        </p>

        {/* For Current Students */}
        <h3 className="font-agatho text-[40px] leading-[50px] text-black mb-4">
          For Current Students
        </h3>
        <p className="font-sans text-[16px] leading-10 text-black">
          Digital resources and databases are accessible via the learning
          management system (Moodle) and the Support Hub.
        </p>
      </Container>
    </Section>
  );
}
