import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import ContactContent from "./components/ContactContent";
import MapSection from "./components/MapSection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function Contact() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/contact/hero.webp"
          title="Contact us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact us" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <ContactContent />
        <MapSection />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
