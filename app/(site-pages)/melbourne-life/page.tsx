import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import MelbourneSections from "./components/MelbourneSections";

export default function MelbourneLife() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Melbourne Life"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Melbourne Life" },
        ]}
      />
      <MelbourneSections />
      <CTASection />
    </>
  );
}
