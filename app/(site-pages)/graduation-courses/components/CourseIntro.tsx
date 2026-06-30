import Container from "@/app/components/ui/Container";

export default function CourseIntro() {
  return (
    <section className="bg-brand-green-darkest py-16">
      <Container>
        <h2 className="font-agatho text-[50px] leading-[1.15] text-white mb-6 max-w-3xl">
          Find the Right Course for Your Future
        </h2>
        <p className="font-sans text-[16px] leading-7 text-white/75 max-w-2xl">
          We are currently offering the Bachelor of Information Technology, specialising in Data Analytics. New programs in Business, Health, and Education are in development - register your interest to stay informed.
        </p>
      </Container>
    </section>
  );
}
