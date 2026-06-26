import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";

const POLICY_GROUPS = [
  {
    policy: "Academic Integrity Policy",
    procedure: "Academic Integrity Procedure",
  },
  {
    policy: "Admissions Policy",
    procedure: "Admissions Procedure",
  },
  {
    policy: "Credit and Recognition of Prior Learning Policy",
    procedure: "Credit and Recognition of Prior Learning Procedure",
  },
  {
    policy: "Enrolment Variation Policy",
    procedure: "Enrolment Variation Procedure",
  },
  {
    policy: "Health and Safety Policy",
    procedure: "Health and Safety Procedure",
  },
  {
    policy: "Student Academic Progression Policy",
    procedure: "Student Academic Progression Procedure",
  },
  {
    policy: "Student Complaints and Appeals Policy",
    procedure: "Student Complaints and Appeals Procedure",
  },
  {
    policy: "Student Fees and Refunds Policy",
    procedure: "Student Fees and Refunds Procedure",
  },
  {
    policy: "Student Orientation Policy",
    procedure: "Student Orientation Procedure",
  },
  {
    policy: "Student Wellbeing and Support Policy",
    procedure: "Student Wellbeing and Support Procedure",
  },
];

export default function PoliciesContent() {
  return (
    <Section className="bg-white">
      <Container>
        <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-6">
          Student Policies and Procedures
        </h2>

        <p className="font-sans text-[16px] leading-7 text-brand-gray max-w-2xl mb-8">
          To support your studies at Stockdale, students are encouraged to review
          the policies and procedures available in this section. These documents
          outline important information about your rights, responsibilities, and
          the processes to follow when you need support or guidance.
        </p>

        <div className="flex flex-col">
          {POLICY_GROUPS.map(({ policy, procedure }) => (
            <div key={policy} className="flex flex-col">
              <a
                href="#"
                className="font-sans text-[16px] leading-7 text-brand-gray underline underline-offset-2 hover:text-brand-green-dark transition-colors"
              >
                {policy}
              </a>
              <a
                href="#"
                className="font-sans text-[16px] leading-7 text-brand-gray underline underline-offset-2 hover:text-brand-green-dark transition-colors mb-4"
              >
                {procedure}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
