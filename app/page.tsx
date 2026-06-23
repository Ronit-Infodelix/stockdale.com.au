import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FeaturedProgram from "./components/FeaturedProgram";
import LearnSkills from "./components/LearnSkills";
import EmpoweringStudents from "./components/EmpoweringStudents";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturedProgram />
      <LearnSkills />
      <EmpoweringStudents />
    </main>
  );
}
