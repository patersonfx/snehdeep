export default function Footer() {
  return (
    <footer className="bg-dark py-16">
      <div className="max-w-container mx-auto px-margin grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {/* Logo & About */}
        <div>
          <h3 className="font-heading text-h3 text-white mb-4">Snehdeep</h3>
          <p className="font-body text-sm text-white/60">
            Your trusted financial growth partner since 2014.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Home</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">About Us</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Services</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Home Loan</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Business Loan</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Insurance</a></li>
            <li><a href="#" className="font-body text-sm text-white/60 hover:text-accent transition">Mutual Funds</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 font-body text-sm text-white/60">
            <li>📞 +91 98765 43210</li>
            <li>📧 info@snehdeep.com</li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="max-w-container mx-auto px-margin mt-12 pt-8 border-t border-white/10 text-center">
        <p className="font-body text-sm text-white/40">
          © 2026 Snehdeep Financial Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
