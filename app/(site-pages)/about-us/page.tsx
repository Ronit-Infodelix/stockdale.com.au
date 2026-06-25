import PageHero from "@/app/components/shared/PageHero";

export default function AboutUs() {
  return (
    <>
      <PageHero
        image="/images/home/students-empowering.png"
        title="About Stockdale"
        subtitle="Building a global community of scholars, one student at a time."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission" },
          { label: "Our Team" },
        ]}
      />
    </>
  );
}
