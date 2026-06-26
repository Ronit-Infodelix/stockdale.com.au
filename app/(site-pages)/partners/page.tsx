import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "../industry/components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";

export default function PartnersPage() {
  return (
    <>
      <PageHero
        image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
        title="Partners"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industry & Partners", href: "/industry" },
          { label: "Partners" },
        ]}
      />
      <IndustryPartnersContent variant="partners" />
      <CTASection />
    </>
  );
}
