import PageHero from "@/app/components/shared/PageHero";
import NewsGrid from "./components/NewsGrid";
import ApplyCTA from "./components/ApplyCTA";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

import { pageMetadata } from "@/app/lib/seo";
import PageSchema from "@/app/components/seo/PageSchema";

export const metadata = pageMetadata("/news-and-events");

export default function NewsAndEvents() {
  return (
    <main>
      <PageSchema
        path="/news-and-events"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "News and Events" },
        ]}
      />
      <ParallaxSticky top="0">
        <PageHero
          image="/images/news/hero.webp"
          title="News and Events"
          subtitle="Stay up to date with the latest announcements, stories, and events from across the Stockdale community."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Admission", href: "/admission" },
            { label: "News and Events" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay overflow={false}>
        <NewsGrid />
        <ApplyCTA />
      </ParallaxOverlay>
    </main>
  );
}
