const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
    title: "Home Loans",
    desc: "Home is the biggest asset you create. We help you compare loan offers, understand product mix, processing fees and ROI across leading banks — so you get the best deal for your dream home.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Commercial Loans",
    desc: "Loan Against Property for general or business purposes — against residential, commercial or industrial property. Quick approvals with expert guidance on the best structure for your needs.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Mutual Fund Investments",
    desc: "40+ AMCs offering Equity, Debt, Hybrid, ELSS, Thematic &amp; Sectoral Funds. Start SIPs or make lump-sum investments with guidance tailored to your risk profile and financial goals.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="11" rx="2"/>
        <path d="M7 10V7a5 5 0 0110 0v3"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Bonds &amp; Fixed Deposits",
    desc: "Government Bonds, Corporate Bonds, Bank Bonds, Sovereign Gold Bonds and Fixed Deposits with varied tenures — safe instruments for guaranteed, predictable returns.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "General &amp; Life Insurance",
    desc: "Fire, Home, Travel and Health insurance for complete non-life coverage. Life plans include Endowment, Term and ULIPs — protecting your family's future at every stage.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Health Insurance",
    desc: "Mediclaim and health insurance coverage ranging from ₹3 Lakhs to ₹50 Crores. Get the right plan for individual, family or senior citizen needs without overpaying.",
    color: "text-primary",
    bg: "bg-bgsection",
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-label">What We Offer</div>
          <h2 className="font-heading text-h2 text-dark mb-4">
            Financial Services Tailored For You
          </h2>
          <p className="font-body text-muted max-w-xl mx-auto">
            From loans to wealth management — we partner with leading banks and institutions to deliver the best solutions for every financial goal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${s.bg} ${s.color} mb-5`}>
                {s.icon}
              </div>
              <h3 className="font-heading text-h3 text-dark mb-2.5" dangerouslySetInnerHTML={{ __html: s.title }} />
              <p className="font-body text-sm text-muted mb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.desc }} />
              <a href="#contact" className={`inline-flex items-center gap-1.5 font-body text-sm font-semibold ${s.color} group-hover:gap-3 transition-all duration-200`}>
                Let's Talk it Out
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
