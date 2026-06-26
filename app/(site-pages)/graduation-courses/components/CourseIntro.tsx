import Container from "@/app/components/ui/Container";

export default function CourseIntro() {
  return (
    <section className="bg-brand-green-darkest py-16">
      <Container>
        <h2 className="font-agatho text-[50px] leading-[1.15] text-white mb-6 max-w-3xl">
          Find the Right Course for Your Future
        </h2>
        <p className="font-sans text-[16px] leading-7 text-white/75 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Container>
    </section>
  );
}
