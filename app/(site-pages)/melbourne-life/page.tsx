import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import MelbourneSections from "./components/MelbourneSections";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function MelbourneLife() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/smiling-students-talking-each-other-standing-near-2026-01-08-07-49-50-utc 1.png"
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
