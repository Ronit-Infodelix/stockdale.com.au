import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "../industry/components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function PartnersPage() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          title="Partners"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industry & Partners", href: "/industry" },
            { label: "Partners" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <IndustryPartnersContent variant="partners" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
