import PageHero from "@/app/components/shared/PageHero";
import IndustryPartnersContent from "./components/IndustryPartnersContent";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function IndustryPage() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/indrustry/hero.webp"
          title="Industry"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industry & Partners", href: "/industry" },
            { label: "Industry" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <IndustryPartnersContent variant="industry" />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
