import PageHero from "@/app/components/shared/PageHero";
import BITContent from "./components/BITContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function BachelorOfIT() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          title={`Bachelor of Information\nTechnology`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/graduation-courses" },
            { label: "Graduate Course" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <BITContent />
      </ParallaxOverlay>
    </main>
  );
}
