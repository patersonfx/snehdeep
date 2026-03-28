const reasons = [
  {
    num: "01",
    title: "Comparative Analysis",
    desc: "Two banks offering the same rate? We find what truly differentiates them — processing fees, ROI, hidden charges, and more.",
  },
  {
    num: "02",
    title: "Holistic View",
    desc: "We assess your complete financial picture — existing liabilities, employer coverage, income streams — before any recommendation.",
  },
  {
    num: "03",
    title: "Education First",
    desc: "We explain every product clearly — entry loads, exit loads, lock-in periods, tax benefits — so you're never making a blind decision.",
  },
  {
    num: "04",
    title: "Long-term Relationship",
    desc: "We're not transactional. We track your portfolio, review your coverage, and keep your strategy aligned with your life goals.",
  },
];

export default function WhySnehdeep() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16" style={{ background: "linear-gradient(135deg, #0A2E47 0%, #0B3C5D 60%, #0D3F63 100%)" }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent font-heading font-semibold text-xs px-0 py-0 mb-4 tracking-widest uppercase border-b border-accent/40 pb-1">
            Why Snehdeep
          </div>
          <h2 className="font-heading font-bold text-white mb-4 leading-tight" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
            The Right Finance Mix <br />
            <span className="text-accent italic font-semibold">Starts Here</span>
          </h2>
          <p className="font-body text-white/55 max-w-lg mx-auto leading-relaxed">
            We simplify complex financial choices and help you understand the "why" behind every recommendation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="rounded-2xl p-5 sm:p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <p className="font-heading text-4xl font-bold text-accent/25 group-hover:text-accent/40 transition-colors duration-300 mb-4 leading-none">
                {r.num}
              </p>
              <h3 className="font-heading text-[15px] font-semibold text-white mb-3">
                {r.title}
              </h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
