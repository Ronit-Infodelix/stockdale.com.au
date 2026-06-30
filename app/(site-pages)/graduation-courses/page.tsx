import PageHero from "@/app/components/shared/PageHero";
import CourseIntro from "./components/CourseIntro";
import CourseListing from "./components/CourseListing";
import ReadyToApplyCTA from "./components/ReadyToApplyCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";
import { pageGraphLd, itemListLd } from "@/app/lib/structured-data";

export const metadata = pageMetadata("/graduation-courses");

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Admission", href: "/admission" },
  { label: "Graduate Course" },
];

export default function GraduationCourses() {
  return (
    <main>
      <JsonLd
        data={[
          ...pageGraphLd("/graduation-courses", CRUMBS),
          itemListLd({
            path: "/graduation-courses",
            name: "Courses at Stockdale Higher Education Institute",
            items: [
              {
                name: "Bachelor of Information Technology (Data Analytics)",
                path: "/graduation-courses",
              },
            ],
          }),
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/graduation/hero.webp"
          title="Graduation Courses"
          subtitle="Industry-relevant qualifications designed to prepare graduates for a complex, rapidly evolving world."
          breadcrumbs={CRUMBS}
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
