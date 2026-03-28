export default function CTA() {
  return (
    <section className="bg-primary py-[100px]">
      <div className="max-w-container mx-auto px-margin text-center">
        <h2 className="font-heading text-h2 text-white mb-6">
          Get the Best Financial Solution Today
        </h2>

        <p className="font-body text-body text-white/70 mb-10 max-w-xl mx-auto">
          Speak to our experts and find the perfect plan tailored for your needs.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-primary font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-bglight transition">
            Call Now
          </button>

          <button className="border-2 border-white text-white font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:text-primary transition">
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
