module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3C5D",
          dark: "#072D47",
          light: "#1A5276",
        },
        accent: {
          DEFAULT: "#F2B705",
          dark: "#D4A104",
          light: "#F7CC3D",
        },
        bglight: "#F8FAFC",
        bgsection: "#EEF4F9",
        dark: "#1E293B",
        muted: "#64748B",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["52px", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.7", fontWeight: "400" }],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(11,60,93,0.08)",
        "card-hover": "0 12px 40px 0 rgba(11,60,93,0.15)",
        glow: "0 0 40px 0 rgba(242,183,5,0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A2E47 0%, #0B3C5D 40%, #155A80 100%)",
        "cta-gradient": "linear-gradient(135deg, #0B3C5D 0%, #072D47 100%)",
        "accent-gradient": "linear-gradient(135deg, #F2B705 0%, #F7CC3D 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
