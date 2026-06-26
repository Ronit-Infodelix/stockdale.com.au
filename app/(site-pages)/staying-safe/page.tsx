import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import StayingSafeSections from "./components/StayingSafeSections";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function StayingSafe() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/staying-safe/hero.webp"
          title="Staying Safe"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/student-life" },
            { label: "Staying Safe" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <StayingSafeSections />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
