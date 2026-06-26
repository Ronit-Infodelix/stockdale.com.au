import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import ScholarshipIntro from "./components/ScholarshipIntro";
import AvailableScholarships from "./components/AvailableScholarships";
import WhoCanApply from "./components/WhoCanApply";

export default function Scholarships() {
  return (
    <>
      <PageHero
        image="/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png"
        title="Scholarships"
        subtitle="Helping you reach your potential — financial support for ambitious students."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Scholarships" },
        ]}
      />
      <ScholarshipIntro />
      <AvailableScholarships />
      <WhoCanApply />
      <CTASection />
    </>
  );
}
