import PageHero from "@/app/components/shared/PageHero";
import PortalLoginCard from "../student-login/components/PortalLoginCard";
import { ParallaxOverlay, ParallaxSticky } from "@/app/components/ui/ParallaxLayer";

export default function AgentLogin() {
  return (
    <main>
      <ParallaxSticky top="0">
        <PageHero
          image="/images/home/gallery/students-group.webp"
          title="Agent Portal"
          subtitle="Manage student referrals and track applications through our dedicated agent portal."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Agent Portal" },
          ]}
        />
      </ParallaxSticky>
      <ParallaxOverlay>
        <section className="bg-[#f5f5f5] py-16 min-h-[480px] flex items-center">
          <div className="w-full">
            <PortalLoginCard variant="agent" />
          </div>
        </section>
      </ParallaxOverlay>
    </main>
  );
}
