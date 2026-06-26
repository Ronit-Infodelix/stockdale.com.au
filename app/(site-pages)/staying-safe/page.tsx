import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import StayingSafeSections from "./components/StayingSafeSections";

export default function StayingSafe() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Staying Safe"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Student Life", href: "/student-life" },
          { label: "Staying Safe" },
        ]}
      />
      <StayingSafeSections />
      <CTASection />
    </>
  );
}
