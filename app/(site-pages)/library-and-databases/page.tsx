import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import LibraryContent from "./components/LibraryContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/library-and-databases");

export default function LibraryAndDatabases() {
  return (
    <main>
      <PageSchema
        path="/library-and-databases"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Library and Databases" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/library/hero.webp"
          title="Library and Databases"
          subtitle="Access the research resources, e-journals, and academic databases that support your learning and assessment."
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
