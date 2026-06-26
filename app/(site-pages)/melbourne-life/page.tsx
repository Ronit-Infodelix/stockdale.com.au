import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import MelbourneSections from "./components/MelbourneSections";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function MelbourneLife() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/melbourne/hero.webp"
          title="Melbourne Life"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Melbourne Life" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <MelbourneSections />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
