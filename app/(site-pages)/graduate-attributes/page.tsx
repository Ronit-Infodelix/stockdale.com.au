import PageHero from "@/app/components/shared/PageHero";
import CTASection from "../(home)/components/CTASection";
import GraduateAttributesTable from "./components/GraduateAttributesTable";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/graduate-attributes");

export default function GraduateAttributes() {
  return (
    <main>
      <PageSchema
        path="/graduate-attributes"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Graduate Attributes" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/graduate/hero.webp"
          title="Graduate Attributes"
          subtitle="The knowledge, skills, and professional capabilities every Stockdale graduate develops to thrive in industry and society."
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
