import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "./components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function IndustryPage() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          title="Industry"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industry & Partners", href: "/industry" },
            { label: "Industry" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <IndustryPartnersContent variant="industry" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
