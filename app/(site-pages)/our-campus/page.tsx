import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import CampusTabs from "./components/CampusTabs";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function OurCampus() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/campus/hero.webp"
          title="Our Campus"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Our Campus" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <CampusTabs />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
