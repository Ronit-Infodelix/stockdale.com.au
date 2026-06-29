import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Map embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.945671831661!2d144.9530073155185!3d-37.79879797975557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c6b3f7a5b%3A0x7a1d6b0c4d0a0b0e!2s120%20Miller%20St%2C%20West%20Melbourne%20VIC%203003!5e0!3m2!1sen!2sau!4v1625000000000"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) hue-rotate(140deg) saturate(0.6) brightness(0.55)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Stockdale Campus Map"
      />

      {/* Green color overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(1, 53, 41, 0.35)", mixBlendMode: "color" }}
      />

      {/* Address popup card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Pin dot */}
        <div className="flex justify-center mb-1">
          <MapPin size={28} className="text-brand-gold-dark drop-shadow" fill="currentColor" strokeWidth={1} />
        </div>
        <div className="bg-white rounded-[8px] px-4 py-3 shadow-lg min-w-[220px]">
          <p className="font-sans text-[10px] text-brand-gray uppercase leading-4 mb-1">
            Address
          </p>
          <p className="font-sans text-[14px] leading-[16px] text-[#050f0d]">
            Level 2, 120 Miller Street,
          </p>
          <p className="font-sans text-[14px] leading-[16px] text-[#050f0d]">
            West Melbourne VIC 3003
          </p>
        </div>
      </div>
    </section>
  );
}
