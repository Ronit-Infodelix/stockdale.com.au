import PageHero from "@/app/components/shared/PageHero";
import NewsGrid from "./components/NewsGrid";
import ApplyCTA from "./components/ApplyCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function NewsAndEvents() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/news/hero.png"
          title="News and Events"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "News and Events" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <NewsGrid />
        <ApplyCTA />
      </ParallaxOverlay>
    </main>
  );
}
