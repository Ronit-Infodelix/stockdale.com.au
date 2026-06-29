import PageHero from "@/app/components/shared/PageHero";
import BITContent from "./components/BITContent";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";
import BITPathways from "./components/BITPathways";

export default function BachelorOfIT() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/it/smiling-students-outside-college-building.png"
          title="Bachelor of Information Technology"
          subtitle="Specialising in Data Analytics — harness the power of data to drive business innovation and decision-making. Build expertise for a data-driven future."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/graduation-courses" },
            { label: "Bachelor of Information Technology" },
          ]}
        >
          <p className="font-sans text-[10px] font-medium uppercase tracking-[2px] text-white border border-white/20 bg-white/5 rounded-full px-3 py-1 backdrop-blur-xs inline-block mb-4">
            AQF Level 7 · Bachelor Degree
          </p>
        </PageHero>
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <BITContent />
      </ParallaxOverlay>
              <BITPathways />
    </main>
  );
}
