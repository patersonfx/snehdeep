const opportunities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
    title: "Builders & Developers",
    desc: "We assist builders with APF (Approved Project for Financing) empanelment and manage home loan disbursements for your units — ensuring smooth cash flows through timely routing.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Real Estate Agents & Brokers",
    desc: "Focused on buy/sell transactions? We complement your work by seamlessly arranging loan financing from your client's preferred bank or institution — expanding your service offering.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Freelance Consultants",
    desc: "Financial advisors, DSAs, or independent consultants looking to collaborate — reach out to explore opportunities to grow together under the Snehdeep network.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function Opportunities() {
  return (
    <section className="section-pad bg-bgsection">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-label">Collaborate With Us</div>
          <h2 className="font-heading text-h2 text-dark mb-4">
            Business <span className="text-primary">Opportunities</span>
          </h2>
          <p className="font-body text-muted max-w-2xl mx-auto leading-relaxed">
            We work in collaboration with Builders for APF (Approved Project for Financing), Developers for Project Finance, Real Estate Agents/Brokers, and Freelancers who intend to collaborate — contact us to explore Opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {opportunities.map((o, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${o.bg} ${o.color} mb-5`}>
                {o.icon}
              </div>
              <h3 className="font-heading text-h3 text-dark mb-3">{o.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-primary rounded-2xl px-5 py-6 sm:px-8 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <div>
            <p className="font-heading text-lg font-semibold text-white mb-1">Interested in collaborating?</p>
            <p className="font-body text-sm text-white/60">Freelancers who intend to collaborate may contact us to explore Opportunities.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-body font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
