import Container from "@/app/components/ui/Container";

const STEPS = [
  { step: "01", title: "Check Requirements", desc: "Review entry requirements" },
  { step: "02", title: "Complete Application", desc: "Fill out the online form" },
  { step: "03", title: "Submit Documents", desc: "Provide required evidence" },
  { step: "04", title: "Receive Offer", desc: "Accept and enrol" },
];

const DATES = [
  { event: "Applications Open", date: "Now Open" },
  { event: "Semester 1 Commencement", date: "February 2026" },
  { event: "Orientation Week", date: "Late January 2026" },
  { event: "Late Application Deadline", date: "January 15, 2026" },
];

export default function AdmissionProcess() {
  return (
    <>
      {/* 4-step process */}
      <section className="bg-white py-16 border-t border-gray-100">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-10">
            Application Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="font-agatho text-[56px] leading-none text-brand-green-light">
                  {step}
                </span>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-sans text-[15px] font-medium text-[#0a0a0a] mb-1">{title}</p>
                  <p className="font-sans text-[13px] text-brand-gray">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Important Dates */}
      <section className="bg-[#f8f5eb] py-16">
        <Container>
          <h2 className="font-agatho text-[40px] leading-[50px] text-black mb-8">
            Important Dates
          </h2>
          <div className="max-w-xl divide-y divide-gray-200 border-t border-gray-200">
            {DATES.map(({ event, date }) => (
              <div key={event} className="flex items-center justify-between py-4 gap-6">
                <p className="font-sans text-[14px] text-brand-gray">{event}</p>
                <p className="font-sans text-[14px] font-medium text-[#0a0a0a] shrink-0">{date}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[12px] text-brand-gray mt-4 italic">
            Confirm all dates with the academic calendar before making travel or accommodation arrangements.
          </p>
        </Container>
      </section>

      {/* Need Help */}
      <section className="bg-brand-green-darkest py-14">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="font-agatho text-[36px] leading-tight text-white mb-2">Need Help?</h2>
              <p className="font-sans text-[14px] text-white/70">
                Our admissions team is here to guide you through every step of the application process.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 font-sans text-[14px]">
              <a href="mailto:admissions@stockdale.edu.au" className="text-brand-green-light hover:underline">
                admissions@stockdale.edu.au
              </a>
              <span className="text-white/50">Phone: TBA</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
