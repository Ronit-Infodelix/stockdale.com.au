import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
      <StatsSection />
      <FeaturedProgram />
      <LearnSkills />
      <EmpoweringStudents />
      <WhyChooseUs />
      <DiscoverLife />
      <Testimonials />
      <BlogsEvents />
      {/*
        MapSection + CTASection share a relative wrapper so the graduate girl
        (which is 741px tall inside a 513px CTA section) naturally overflows
        upward and paints over the bottom of the map — no z-index needed,
        later DOM order handles stacking.
      */}
      <div className="relative">
        <MapSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
