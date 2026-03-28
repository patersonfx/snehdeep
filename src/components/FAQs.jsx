import { useState } from "react";

const faqs = [
  {
    q: "Why should I use an advisor when I can apply directly to a bank?",
    a: "While you can apply directly, you'd be limited to comparing 1–2 products. We have relationships with multiple banks and NBFCs — allowing us to run a parallel comparison and present you with the most suitable option based on your profile, not just the first available offer.",
  },
  {
    q: "Is my employer's health insurance coverage enough?",
    a: "In most cases, no. Group covers are often capped at ₹3–5 lakhs and don't cover pre-existing conditions or critical illnesses. With medical inflation averaging 12–15% annually, a personal cover from ₹5L–₹1Cr is highly advisable — and we help you design the most cost-effective plan.",
  },
  {
    q: "How do I choose a mutual fund when there are 40+ AMCs offering similar products?",
    a: "Choosing the right fund depends on your risk profile, investment horizon, and financial goals. We analyse your situation and shortlist funds based on consistent performance, fund manager track record, and expense ratios — not just past returns.",
  },
  {
    q: "What are Sovereign Gold Bonds and are they better than physical gold?",
    a: "SGBs are Government of India securities denominated in grams of gold. They offer the benefit of gold price appreciation + an annual interest of 2.5% — without storage hassles. Capital gains are also tax-exempt on maturity. For most retail investors, they are superior to physical gold.",
  },
  {
    q: "Do you charge fees for advisory services?",
    a: "We operate on a commission basis received from partner institutions — at no direct cost to you as a client. Our income is aligned with your satisfaction, which means we're motivated to find you the best deal across the board.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-heading text-[15px] font-semibold transition-colors duration-200 ${open ? "text-primary" : "text-dark group-hover:text-primary"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${open ? "bg-accent/15 text-accent rotate-45" : "bg-gray-100 text-muted group-hover:bg-accent/15 group-hover:text-accent"}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </button>

      {open && (
        <p className="font-body text-sm text-muted leading-relaxed pb-5 pr-10">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left: Heading */}
          <div className="md:sticky md:top-28">
            <div className="section-label">Common Questions</div>
            <h2 className="font-heading text-h2 text-dark mb-4 leading-tight">
              Frequently Asked{" "}
              <span className="text-accent italic">Questions</span>
            </h2>
            <p className="font-body text-muted leading-relaxed mb-8">
              Have questions about our services or how we work? We've answered the most common ones below.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Ask Us Directly
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Right: Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
