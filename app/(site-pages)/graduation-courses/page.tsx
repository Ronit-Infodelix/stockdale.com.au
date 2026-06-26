import PageHero from "@/app/components/shared/PageHero";
import CourseIntro from "./components/CourseIntro";
import CourseListing from "./components/CourseListing";
import ReadyToApplyCTA from "./components/ReadyToApplyCTA";

export default function GraduationCourses() {
  return (
    <>

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


        <CourseIntro />
        <CourseListing />
        <ReadyToApplyCTA />
    </>
  );
}
