export default function CTA() {
  return (
    <section className="relative bg-cta-gradient py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container-max relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-heading font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow inline-block" />
          Best Time to Call: 11am–2pm &amp; 4pm–7pm
        </div>

        <h2 className="font-heading text-h2 text-white mb-4 sm:mb-5 max-w-2xl mx-auto">
          Get the Best Financial Solution Today
        </h2>

        <p className="font-body text-base sm:text-lg text-white/65 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Speak with Jasmeena and her team. Get a personalized plan tailored to your goals — completely free consultation.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="tel:+918976002197"
            className="btn-white inline-flex justify-center items-center gap-2.5 w-full sm:w-auto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.17 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.27-.52a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>

          <a
            href="https://wa.me/918976002197"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2.5 border-2 border-white/40 text-white font-body font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-white hover:text-primary transition-all duration-200 active:scale-95 w-full sm:w-auto text-sm sm:text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>

          <a
            href="mailto:assist.snehdeep@gmail.com"
            className="inline-flex justify-center items-center gap-2.5 border-2 border-white/40 text-white font-body font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl hover:bg-white hover:text-primary transition-all duration-200 active:scale-95 w-full sm:w-auto text-sm sm:text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send Message
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-10 font-body text-xs text-white/40 tracking-wide">
          ARN: 140122 · IRDA Licensed · No spam · Your data is safe with us.
        </p>
      </div>
    </section>
  );
}
