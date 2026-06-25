import PageHero from "@/app/components/shared/PageHero";
import NewsGrid from "./components/NewsGrid";
import ApplyCTA from "./components/ApplyCTA";

export default function NewsAndEvents() {
  return (
    <>
      <PageHero
        image="/images/news/hero.png"
        title="News and Events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "News and Events" },
        ]}
      />

      <NewsGrid />

      <ApplyCTA />
    </>
  );
}
