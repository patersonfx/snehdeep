const testimonials = [
  {
    quote: "Snehdeep helped me get the best home loan rate. Highly professional and transparent service!",
    name: "Rajesh Sharma",
    stars: 5,
  },
  {
    quote: "Their wealth planning advice transformed my financial future. Truly trustworthy advisors.",
    name: "Priya Patel",
    stars: 5,
  },
  {
    quote: "Quick business loan approval with minimal paperwork. Excellent support throughout the process.",
    name: "Amit Verma",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-[100px]">
      <div className="max-w-container mx-auto px-margin">
        <h2 className="font-heading text-h2 text-primary text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-gutter">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="font-body text-body text-dark/70 mb-6 italic">
                "{t.quote}"
              </p>

              <div className="text-accent text-lg mb-2">
                {"⭐".repeat(t.stars)}
              </div>

              <p className="font-heading text-h3 text-dark">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
