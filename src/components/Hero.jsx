export default function Hero() {
  return (
    <section className="bg-bglight py-[100px]">
      <div className="max-w-container mx-auto px-margin grid md:grid-cols-2 gap-gutter items-center">
        <div>
          <h1 className="font-heading text-h1 text-primary mb-6">
            Your Financial Growth Partner
          </h1>

          <p className="font-body text-body text-dark/70 mb-8 max-w-md">
            Loans • Investments • Insurance • Wealth Planning — we help you
            build a secure financial future with trusted expertise.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-opacity-90 transition">
              Get Consultation
            </button>

            <button className="border-2 border-accent text-accent font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-accent hover:text-white transition">
              Calculate EMI
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Financial growth illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
