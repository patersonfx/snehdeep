module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C5D",
        accent: "#F2B705",
        bglight: "#F8FAFC",
        dark: "#1E293B",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["22px", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      maxWidth: {
        container: "1440px",
      },
      padding: {
        margin: "80px",
      },
      gap: {
        gutter: "24px",
      },
    },
  },
  plugins: [],
};
