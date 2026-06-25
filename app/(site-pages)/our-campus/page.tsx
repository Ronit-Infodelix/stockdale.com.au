import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import CampusTabs from "./components/CampusTabs";

export default function OurCampus() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Our Campus"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Campus" },
        ]}
      />
      <CampusTabs />
      <CTASection />
    </>
  );
}
