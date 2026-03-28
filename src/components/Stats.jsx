const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "Multi", label: "Bank Partners" },
  { value: "Trusted", label: "Financial Advisor" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-[80px]">
      <div className="max-w-container mx-auto px-margin grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="font-heading text-h1 text-accent">{s.value}</p>
            <p className="font-body text-body text-white/80 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
