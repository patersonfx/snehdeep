const services = [
  { icon: "🏠", title: "Home Loan", desc: "Affordable rates for your dream home with flexible EMI options." },
  { icon: "💼", title: "Business Loan", desc: "Fuel your business growth with quick approvals and low interest." },
  { icon: "📈", title: "Mutual Funds", desc: "Smart diversified investments managed by top fund managers." },
  { icon: "🏦", title: "Fixed Deposits", desc: "Guaranteed returns with safe and secure deposit plans." },
  { icon: "🛡️", title: "Insurance", desc: "Protect your family's future with comprehensive coverage." },
  { icon: "💰", title: "Wealth Planning", desc: "Personalized strategies to grow and preserve your wealth." },
];

export default function Services() {
  return (
    <section className="py-[100px]">
      <div className="max-w-container mx-auto px-margin">
        <h2 className="font-heading text-h2 text-primary text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-gutter">
          {services.map((s, i) => (
            <div
              key={i}
              className="w-full max-w-[300px] mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-heading text-h3 text-dark mb-2">{s.title}</h3>
              <p className="font-body text-body text-dark/60 mb-4">{s.desc}</p>
              <button className="text-primary font-body font-semibold hover:text-accent transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
