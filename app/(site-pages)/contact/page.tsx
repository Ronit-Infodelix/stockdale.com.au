import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import ContactContent from "./components/ContactContent";
import MapSection from "./components/MapSection";

export default function Contact() {
  return (
    <>
      <PageHero
        image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
        title="Contact us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact us" },
        ]}
      />
      <ContactContent />
      <MapSection />
      <CTASection />
    </>
  );
}
