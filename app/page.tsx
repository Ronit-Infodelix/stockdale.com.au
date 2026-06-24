import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextLine from "./components/TextLine";
import StatsSection from "./components/StatsSection";
import FeaturedProgram from "./components/FeaturedProgram";
import LearnSkills from "./components/LearnSkills";
import EmpoweringStudents from "./components/EmpoweringStudents";
import WhyChooseUs from "./components/WhyChooseUs";
import DiscoverLife from "./components/DiscoverLife";
import Testimonials from "./components/Testimonials";
import BlogsEvents from "./components/BlogsEvents";
import MapSection from "./components/MapSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/*
        z-10 + relative: these sections sit above the sticky hero (z-0) in the
        stacking context, so they slide up over it as the user scrolls.
        bg-white ensures no transparency gap between sections.
      */}
      <div className="relative z-10 bg-white">
        <StatsSection />
        {/* FeaturedProgram pins — LearnSkills scrolls over it */}
        <div className="sticky top-18 z-0">
          <FeaturedProgram />
        </div>

        {/* LearnSkills card rises over the pinned FeaturedProgram */}
        <div className="relative z-10 rounded-t-[28px] overflow-hidden">
          <LearnSkills />
        </div>
        {/* EmpoweringStudents pins — WhyChooseUs scrolls over it */}
        <div className="sticky top-0 z-0">
          <EmpoweringStudents />
        </div>

        {/* WhyChooseUs card rises over the pinned EmpoweringStudents */}
        <div className="relative z-10 rounded-t-[28px] overflow-hidden">
          <WhyChooseUs />
        </div>
        <div className="relative">
          <DiscoverLife />
          <Testimonials />
          <TextLine />
          <BlogsEvents />
        </div>
        {/*
          MapSection + CTASection share a relative wrapper so the graduate girl
          naturally overflows upward and paints over the bottom of the map.
        */}
        <div className="relative">
          <MapSection />
        </div>
        <div className="sticky top-0 z-0">
          <CTASection />
        </div>

        <div className="relative">
          <Footer />
        </div>
      </div>
    </main>
  );
}
