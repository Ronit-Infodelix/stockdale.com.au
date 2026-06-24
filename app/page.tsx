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
        <FeaturedProgram />
        <LearnSkills />
        <EmpoweringStudents />
        <WhyChooseUs />
        <DiscoverLife />
        <Testimonials />
        <TextLine />
        <BlogsEvents />
        {/*
          MapSection + CTASection share a relative wrapper so the graduate girl
          naturally overflows upward and paints over the bottom of the map.
        */}
        <div className="relative">
          <MapSection />
          <CTASection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
