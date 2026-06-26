import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import LibraryContent from "./components/LibraryContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function LibraryAndDatabases() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/library/hero.webp"
          title="Library and Databases"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Library and Databases" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <LibraryContent />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
