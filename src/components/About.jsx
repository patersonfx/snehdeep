export default function About() {
  return (
    <section className="py-[100px] bg-bglight">
      <div className="max-w-container mx-auto px-margin grid md:grid-cols-2 gap-gutter items-center">
        <div>
          <img
            src="/about.png"
            alt="About Snehdeep"
            className="rounded-2xl w-full max-w-md shadow-lg"
          />
        </div>

        <div>
          <h2 className="font-heading text-h2 text-primary mb-6">
            About Snehdeep Financial Services
          </h2>

          <p className="font-body text-body text-dark/70 mb-4">
            With over 10 years of experience, we provide expert financial
            guidance to individuals and businesses across India. Our mission is
            to simplify financial planning and help you achieve your goals.
          </p>

          <p className="font-body text-body text-dark/70 mb-8">
            From home loans to wealth management, our multi-bank partnerships
            ensure you always get the best rates and personalized solutions.
          </p>

          <button className="bg-primary text-white font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-opacity-90 transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
