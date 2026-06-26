import PageHero from "@/app/components/shared/PageHero";
import LearningTabs from "./components/LearningTabs";
import CTASection from "../(home)/components/CTASection";

export default function LearningAndTeaching() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Learning and Teaching Approach"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Learning and Teaching" },
        ]}
      />
      <LearningTabs />
      <CTASection />
    </>
  );
}
