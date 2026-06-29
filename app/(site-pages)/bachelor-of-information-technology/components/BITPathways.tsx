import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/app/components/ui/Container";

export default function BITPathways() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: "linear-gradient(160deg, #fff4c9 21.926%, #f0c41a 78.074%)" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="font-agatho text-[50px] leading-[58px] text-[#050505]">
              Pathways to Further Learning
            </h2>
            <p className="font-sans text-[16px] leading-6 text-[#050505]">
              Upon completion of the BIT course, graduates can undertake further postgraduate study. These pathways typically include:
            </p>
            <div className="font-sans text-[16px] leading-6 text-brand-green-dark space-y-1">
              <p>• Master of Information Technology (Master of IT) programs</p>
              <p>• Graduate Certificate (Grad Cert) programs</p>
              <p>• Graduate Diploma (Grad Dip) programs</p>
            </div>
            <p className="font-sans text-[16px] leading-6 text-[#050505] pt-2">
              Students should refer to the course seeker and compare ED websites: courseseeker.edu.au and compared.edu.au
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/how-to-apply"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest bg-white text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
              >
                How to Apply <ChevronRight size={12} strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#013529] text-brand-green-darkest bg-white text-[14px] font-sans hover:bg-brand-green-darkest hover:text-white transition-colors"
              >
                Handbook <ChevronRight size={12} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/graduation/hero.webp"
              alt="Graduates celebrating"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
