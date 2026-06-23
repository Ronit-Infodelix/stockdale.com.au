import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-200"></div>
    </main>
  );
}
