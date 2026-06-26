import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import GraduateAttributesTable from "./components/GraduateAttributesTable";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function GraduateAttributes() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/graduate/hero.webp"
          title="Graduate Attributes"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Graduate Attributes" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <GraduateAttributesTable />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
