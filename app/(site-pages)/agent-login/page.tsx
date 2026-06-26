import PageHero from "@/app/components/shared/PageHero";
import PortalLoginCard from "../student-login/components/PortalLoginCard";

export default function AgentLogin() {
  return (
    <>
      <PageHero
        image="/images/home/gallery/a-group-of-young-multi-ethnic-group-of-student-in-2026-03-17-14-49-05-utc 1.png"
        title="Agent Portal"
        subtitle="Manage student referrals and track applications through our dedicated agent portal."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agent Portal" },
        ]}
      />

      {/* Login card section */}
      <section className="bg-[#f5f5f5] py-16 min-h-[480px] flex items-center">
        <div className="w-full">
          <PortalLoginCard variant="agent" />
        </div>
      </section>
    </>
  );
}
