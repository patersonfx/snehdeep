import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden flex items-center pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* ── Left: Text ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-[10px] sm:text-[11px] font-heading font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 tracking-[0.10em] sm:tracking-[0.12em] uppercase">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              Established 2014 · 19+ Years in Finance
            </div>

            <h1 className="font-heading font-bold text-white leading-[1.1] mb-5 md:mb-6" style={{ fontSize: "clamp(30px, 5vw, 58px)" }}>
              Ideas to Create{" "}
              <span className="text-accent">Assets</span>{" "}
              &amp; Build Wealth
            </h1>

            <p className="font-body text-white/70 text-base sm:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
              Home Loans · Commercial Loans · Mutual Funds · Government &amp; Sovereign Gold Bonds · Health, Travel &amp; General Insurance — expert guidance for every financial goal.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-7 py-3.5 rounded-xl hover:bg-bglight transition-all duration-200 shadow-lg active:scale-95">
                Get in Touch
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 active:scale-95">
                Our Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-10 md:mt-14 flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
              {[
                { val: "19+", lbl: "Years in Finance" },
                { val: "9+",  lbl: "Years of Snehdeep" },
                { val: "ARN", sub: "140122", lbl: "AMFI Registered" },
              ].map((s) => (
                <div key={s.lbl} className="flex flex-col">
                  <span className="font-heading text-3xl font-bold text-accent leading-none">
                    {s.val}{s.sub ? <span className="text-xl ml-1">{s.sub}</span> : null}
                  </span>
                  <span className="font-body text-xs text-white/55 mt-1">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Logo illustration ── */}
          <div className="flex justify-center items-center mt-6 md:mt-0">
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-accent/15 blur-2xl scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-90 pointer-events-none" />

              {/* Outer ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Logo size={120} className="drop-shadow-2xl sm:w-36 sm:h-36 md:w-40 md:h-40" />
                </div>
              </div>

              {/* Floating badge: AMFI */}
              <div className="absolute -bottom-4 -right-2 md:right-4 bg-white rounded-2xl shadow-card-hover px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F2B705" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-[10px] sm:text-xs font-bold text-dark">AMFI Registered</p>
                  <p className="font-body text-[9px] sm:text-[10px] text-muted">ARN: 140122</p>
                </div>
              </div>

              {/* Floating badge: IRDA */}
              <div className="absolute -top-2 -right-2 md:right-0 bg-white rounded-2xl shadow-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B3C5D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-[10px] sm:text-xs font-bold text-dark">IRDA Licensed</p>
                  <p className="font-body text-[9px] sm:text-[10px] text-muted">Insurance Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
