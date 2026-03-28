import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "About",         href: "#about" },
  { label: "Services",      href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "FAQs",          href: "#faqs" },
  { label: "Contact",       href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-card py-2" : "bg-transparent py-4"
    }`}>
      <div className="container-max px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={44} />
          <div className="leading-tight">
            <span className={`block font-heading text-[17px] font-bold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
              Snehdeep
            </span>
            <span className={`block font-body text-[11px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? "text-muted" : "text-white/60"}`}>
              Enterprises
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-dark hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+918976002197"
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.17 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.27-.52a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call Now
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition ${scrolled ? "text-dark hover:bg-bgsection" : "text-white hover:bg-white/10"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-dark hover:text-primary transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918976002197"
              className="mt-1 bg-accent text-white font-body font-semibold text-sm text-center py-3 rounded-xl"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
