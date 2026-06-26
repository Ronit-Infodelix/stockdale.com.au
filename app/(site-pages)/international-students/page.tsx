import PageHero from "@/app/components/shared/PageHero";
import StudentRequirementsContent from "../domestic-students/components/StudentRequirementsContent";
import CTASection from "../(home)/components/CTASection";

export default function InternationalStudents() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="International Students"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/how-to-apply" },
          { label: "International Student" },
        ]}
      />
      <StudentRequirementsContent variant="international" />
      <CTASection />
    </>
  );
}
