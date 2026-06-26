import PageHero from "@/app/components/shared/PageHero";
import CourseIntro from "./components/CourseIntro";
import CourseListing from "./components/CourseListing";
import ReadyToApplyCTA from "./components/ReadyToApplyCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function GraduationCourses() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/about/smiling-students-outside-college-building-with-boo-2026-01-11-10-53-42-utc 1.png"
          title="Graduation Courses"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "Graduate Course" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <CourseIntro />
        <CourseListing />
        <ReadyToApplyCTA />
      </ParallaxOverlay>
    </main>
  );
}
