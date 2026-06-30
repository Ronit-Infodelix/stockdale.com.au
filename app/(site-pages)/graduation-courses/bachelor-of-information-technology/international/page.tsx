import PageHero from "@/app/components/shared/PageHero";
import BITContent from "../components/BITContent";
import BITPathways from "../components/BITPathways";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/graduation-courses/bachelor-of-information-technology/international");

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/graduation-courses" },
  { label: "Bachelor of Information Technology" },
  { label: "International Students" },
];

export default function BITInternationalStudents() {
  return (
    <main>
      <PageSchema path="/graduation-courses/bachelor-of-information-technology/international" crumbs={CRUMBS} />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/international/hero.webp"
          title="Bachelor of Information Technology - International Students"
          subtitle="Study in Melbourne with confidence - explore our CRICOS-registered course, English language requirements, and the support that helps international students thrive."
          breadcrumbs={CRUMBS}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <BITContent variant="international" />
      </ParallaxOverlay>
      <BITPathways />
    </main>
  );
}
