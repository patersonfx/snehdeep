const stats = [
  {
    value: "19+",
    label: "Years in Finance",
    sub: "10+ banking + 9 years Snehdeep",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Home Loan Success",
    sub: "Every client placed successfully",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    value: "40+",
    label: "AMC Partners",
    sub: "For mutual fund investments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    value: "₹50Cr",
    label: "Max Health Cover",
    sub: "Insurance coverage available",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="bg-primary py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full translate-y-1/2" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <p className="font-heading text-4xl md:text-5xl font-bold text-accent mb-1">{s.value}</p>
              <p className="font-body text-sm font-semibold text-white mt-1">{s.label}</p>
              <p className="font-body text-xs text-white/50 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
