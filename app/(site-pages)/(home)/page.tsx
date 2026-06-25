import Hero from "../../components/Hero";
import EnquiryModal from "../../components/EnquiryModal";
import TextLine from "../../components/TextLine";
import StatsSection from "../../components/StatsSection";
import FeaturedProgram from "../../components/FeaturedProgram";
import LearnSkills from "../../components/LearnSkills";
import EmpoweringStudents from "../../components/EmpoweringStudents";
import WhyChooseUs from "../../components/WhyChooseUs";
import DiscoverLife from "../../components/DiscoverLife";
import Testimonials from "../../components/Testimonials";
import BlogsEvents from "../../components/BlogsEvents";
import MapSection from "../../components/MapSection";
import CTASection from "../../components/CTASection";

import {
  ParallaxSticky,
  ParallaxOverlay,
} from "../../components/ui/ParallaxLayer";

export default function Home() {
  return (
    <main>
      <EnquiryModal />
      <Hero />

      {/* StatsSection slides up over the sticky Hero */}
      <ParallaxOverlay>
        <StatsSection />
      </ParallaxOverlay>

      {/* FeaturedProgram pins — LearnSkills scrolls over it */}
      <ParallaxSticky top="18">
        <FeaturedProgram />
      </ParallaxSticky>

      <ParallaxOverlay>
        <LearnSkills />
      </ParallaxOverlay>

      {/* EmpoweringStudents pins — WhyChooseUs scrolls over it */}
      <ParallaxSticky top="18">
        <EmpoweringStudents />
      </ParallaxSticky>

      <ParallaxOverlay className="mt-40">
        <WhyChooseUs />
      </ParallaxOverlay>

      <ParallaxSticky top="18">
        <DiscoverLife />
      </ParallaxSticky>

      <ParallaxOverlay>
        <Testimonials />
      </ParallaxOverlay>

      <ParallaxSticky top="18">
        <TextLine />
      </ParallaxSticky>

      {/* No rounded corners on BlogsEvents */}
      <ParallaxOverlay rounded={false}>
        <BlogsEvents />
      </ParallaxOverlay>

      {/*
        MapSection + CTASection: graduate girl overflows upward over the map.
        CTASection + Footer share the overlay so they group naturally.
      */}
      <ParallaxSticky top="18">
        <MapSection />
      </ParallaxSticky>
      <ParallaxOverlay className="overflow-visible">
        <CTASection />
      </ParallaxOverlay>
    </main>
  );
}
