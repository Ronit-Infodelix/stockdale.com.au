import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import PoliciesContent from "./components/PoliciesContent";

export default function PoliciesAndProcedures() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Policies and Procedures"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Policies and Procedures" },
        ]}
      />

      <PoliciesContent />
      <CTASection />
    </>
  );
}
