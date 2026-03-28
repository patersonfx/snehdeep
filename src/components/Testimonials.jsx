// Real testimonials will be added once available from the client.
// Placeholder cards shown with authentic financial service themes.
const testimonials = [
  {
    quote: "Jasmeena helped us navigate the home loan process seamlessly. She compared rates across multiple banks and got us the best deal. Couldn't have done it without Snehdeep!",
    name: "Rajesh & Meena Sharma",
    role: "Home Loan — Mumbai",
    initials: "RS",
    color: "bg-blue-500",
    stars: 5,
  },
  {
    quote: "I started my SIP journey with Snehdeep 5 years ago. The guidance on fund selection and portfolio review has been exceptional. My wealth has grown steadily since.",
    name: "Priya Patel",
    role: "Mutual Fund Investor",
    initials: "PP",
    color: "bg-violet-500",
    stars: 5,
  },
  {
    quote: "Got my commercial property loan sorted within weeks. The process was transparent, paperwork minimal, and Jasmeena was always available to answer every question.",
    name: "Amit Verma",
    role: "Commercial Loan — Pune",
    initials: "AV",
    color: "bg-emerald-500",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F2B705">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <div className="section-label">Client Stories</div>
          <h2 className="font-heading text-h2 text-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-muted max-w-md mx-auto">
            Real stories from clients who trusted us with their financial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-heading text-primary/8 leading-none select-none">
                "
              </div>

              <StarRating count={t.stars} />

              <p className="font-body text-sm text-muted leading-relaxed mb-7 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-heading text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark">{t.name}</p>
                  <p className="font-body text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
