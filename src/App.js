import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import Opportunities from "./components/Opportunities";
import FAQs from "./components/FAQs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

// Wraps a section with an anchor that offsets for the fixed navbar
function Section({ id, children }) {
  return (
    <div id={id} style={{ scrollMarginTop: "64px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Section id="home"><Hero /></Section>
      <Section id="services"><Services /></Section>
      <Stats />
      <Section id="about"><About /></Section>
      <Section id="opportunities"><Opportunities /></Section>
      <Section id="faqs"><FAQs /></Section>
      <Section id="testimonials"><Testimonials /></Section>
      <Section id="contact"><CTA /></Section>
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
