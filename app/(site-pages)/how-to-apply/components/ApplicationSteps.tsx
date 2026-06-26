import Container from "@/app/components/ui/Container";

const STEPS = [
  {
    n: "01",
    title: "Choose Your Course",
    body: "Browse our undergraduate, graduate and short courses. Check entry requirements and intake dates that suit you.",
  },
  {
    n: "02",
    title: "Submit Application",
    body: "Complete the online form and upload your academic transcripts, ID and English-language test results.",
  },
  {
    n: "03",
    title: "Receive Your Offer",
    body: "Successful applicants receive a Letter of Offer within 5–7 business days, with full details on next steps.",
  },
  {
    n: "04",
    title: "Enrol & Start",
    body: "Accept your offer, pay the deposit, complete enrolment and join us at orientation — your journey begins!",
  },
];

export default function ApplicationSteps() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <Container>
        {/* Centred header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-[#d8eee6] text-[#0a3e30] text-[12px] font-sans font-medium">
            Application process
          </span>
          <h2 className="font-agatho text-[48px] leading-[56px] text-[#0a0a0a] tracking-tight">
            Apply in{" "}
            <span className="text-[#d4a017]">4 Simple Steps</span>
          </h2>
          <p className="font-sans text-[15px] leading-[26px] text-[#6b7280] max-w-[580px]">
            A clear, transparent application process designed to get you from enquiry to enrolment
            quickly.
          </p>
        </div>

        {/* 4-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ n, title, body }) => (
            <div
              key={n}
              className="bg-white rounded-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] px-6 pt-8 pb-8 flex flex-col items-center gap-3 text-center"
            >
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full bg-[#0d4a3a] flex items-center justify-center shrink-0">
                <span className="font-agatho text-[22px] leading-none text-[#e6b820]">{n}</span>
              </div>

              <h3 className="font-agatho text-[18px] leading-[21px] text-[#0a0a0a] tracking-tight pt-2">
                {title}
              </h3>

              <p className="font-sans text-[13.5px] leading-[22px] text-[#6b7280]">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
