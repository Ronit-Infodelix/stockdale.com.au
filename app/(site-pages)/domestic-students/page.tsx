import PageHero from "@/app/components/shared/PageHero";
import StudentRequirementsContent from "./components/StudentRequirementsContent";
import CTASection from "../(home)/components/CTASection";

export default function DomesticStudents() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Domestic Students"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/how-to-apply" },
          { label: "Domestic Student" },
        ]}
      />
      <StudentRequirementsContent variant="domestic" />
      <CTASection />
    </>
  );
}
