import Logo from "./Logo";

const highlights = [
  "10+ years banking experience in Treasury Risk at a leading bank",
  "Deep understanding of economics and changing financial products",
  "AMFI Registered (ARN 140122) &amp; IRDA licensed advisor",
  "Personalized, unbiased guidance — your goals first, always",
];

export default function About() {
  return (
    <section className="section-pad bg-bgsection">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Logo visual ── */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75 pointer-events-none" />

              {/* Dark circle — matches Hero style */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0A2E47 0%, #0B3C5D 60%, #155A80 100%)" }}>
                {/* Inner ring */}
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <Logo size={190} />
              </div>

              {/* AMFI badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-card-hover px-5 py-3.5 flex items-center gap-3 whitespace-nowrap">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-heading font-bold text-lg">✓</div>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark">AMFI Registered</p>
                  <p className="font-body text-xs text-muted">ARN: 140122</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            <div className="section-label">About Us</div>
            <h2 className="font-heading text-h2 text-dark mb-5 leading-tight">
              19+ Years of Financial Expertise
            </h2>
            <p className="font-body text-muted mb-4 leading-relaxed">
              <strong className="text-dark">Snehdeep Enterprises</strong> was established in 2014 by{" "}
              <strong className="text-dark">Jasmeena Jatin Sanghani</strong>, with a vision to assist clients with ideas to create Assets and manage Liabilities — helping them build lasting Wealth.
            </p>
            <p className="font-body text-muted mb-4 leading-relaxed">
              Jasmeena brings 10+ years of banking experience from the Treasury Risk department of a leading bank. Combined with 9 years of Snehdeep's journey, that's 19+ years immersed in the world of finance.
            </p>
            <p className="font-body text-muted mb-8 leading-relaxed">
              Financial knowledge is the key to good financial decisions. Financial fitness is the key to a stress-free life — and that's what we help you achieve.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="font-body text-sm text-dark font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary inline-block">
              Let's Talk it Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
