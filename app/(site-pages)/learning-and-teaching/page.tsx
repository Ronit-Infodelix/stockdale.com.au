import PageHero from "@/app/components/shared/PageHero";
import LearningTabs from "./components/LearningTabs";
import CTASection from "../(home)/components/CTASection";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/learning-and-teaching");

export default function LearningAndTeaching() {
  return (
    <main>
      <PageSchema
        path="/learning-and-teaching"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Learning and Teaching" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/learning/hero.webp"
          title="Learning and Teaching Approach"
          subtitle="Discover our employment-connected approach, where academic rigour meets real-world, work-integrated learning to prepare you for industry."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Learning and Teaching" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <LearningTabs />
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
