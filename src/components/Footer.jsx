import Logo from "./Logo";

const quickLinks = ["Home", "About Us", "Services", "Opportunities", "FAQs", "Contact"];
const serviceLinks = ["Home Loans", "Commercial Loans", "Mutual Fund Investments", "Bonds & Fixed Deposits", "General Insurance", "Life Insurance", "Health Insurance"];

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container-max px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <Logo size={44} />
              <div className="leading-tight">
                <span className="block font-heading text-lg font-bold text-white">Snehdeep</span>
                <span className="block font-body text-xs text-white/50 -mt-0.5">Enterprises</span>
              </div>
            </a>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-2">
              Ideas to Create Assets &amp; Build Wealth.
            </p>
            <p className="font-body text-xs text-white/35 leading-relaxed mb-5">
              Established 2014 · ARN: 140122 · IRDA Licensed
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  label: "LinkedIn",
                  d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  label: "Instagram",
                  d: "M21 2H3v20l4-4h14V2zM12 8v8M8 12h8",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:bg-accent hover:text-white transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-white/50 hover:text-accent transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              {[
                {
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.17 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.27-.52a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>,
                  text: "+91 897 600 21 97",
                  sub: "Best: 11am–2pm & 4pm–7pm",
                  href: "tel:+918976002197",
                },
                {
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                  text: "assist.snehdeep@gmail.com",
                  sub: null,
                  href: "mailto:assist.snehdeep@gmail.com",
                },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-accent group-hover:text-white transition-all duration-200 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </span>
                    <span>
                      <span className="block font-body text-sm text-white/50 group-hover:text-white/80 transition-colors duration-200 leading-relaxed break-all">
                        {item.text}
                      </span>
                      {item.sub && (
                        <span className="block font-body text-xs text-white/30 mt-0.5">{item.sub}</span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © 2026 Snehdeep Enterprises. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
