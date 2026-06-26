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
          image="/images/graduation/hero.webp"
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
