import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import GraduateAttributesTable from "./components/GraduateAttributesTable";

export default function GraduateAttributes() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Graduate Attributes"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Graduate Attributes" },
        ]}
      />

      <GraduateAttributesTable />
      <CTASection />
    </>
  );
}
