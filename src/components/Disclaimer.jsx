const disclaimers = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    text: "Mutual Fund Investments are subject to Market Risk. Please read the offer document carefully before investing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    text: "All Investments are linked to market risk. Please read the offer documents very carefully.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 flex-shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    text: "Insurance is a subject matter of solicitation.",
  },
];

export default function Disclaimer() {
  return (
    <div className="bg-dark border-t border-white/5 px-4 sm:px-6 md:px-10 lg:px-16 py-6">
      <div className="container-max">
        <div className="flex flex-wrap items-start gap-x-8 gap-y-3">
          {/* Label */}
          <span className="flex-shrink-0 font-heading text-[11px] font-bold text-white/40 uppercase tracking-widest pt-0.5">
            Disclaimers
          </span>

          {/* Items */}
          <div className="flex flex-col gap-2.5 flex-1 min-w-0">
            {disclaimers.map((d, i) => (
              <div key={i} className="flex items-start gap-2.5 text-white/45">
                <span className="mt-0.5 text-accent/60">{d.icon}</span>
                <p className="font-body text-xs leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
