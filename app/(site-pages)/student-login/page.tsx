import PageHero from "@/app/components/shared/PageHero";
import PortalLoginCard from "./components/PortalLoginCard";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function StudentLogin() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/gallery/diverse-students-celebrating-success-throwing-note-2026-03-25-10-03-39-utc 1.png"
          title="Student Portal"
          subtitle="Welcome back — access your courses, results, timetable and student services."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Student Portal" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <section className="bg-[#f5f5f5] py-16 min-h-[480px] flex items-center">
          <div className="w-full">
            <PortalLoginCard variant="student" />
          </div>
        </section>
      </ParallaxOverlay>
    </main>
  );
}
