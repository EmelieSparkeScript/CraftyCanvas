import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import LogoBar from "./components/LogoBar.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

import "./App.css";

function App() {
  return (
    <div className="container mx-auto text-carbon-fiber text-base font-epilogue">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <SkillsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}

export default App;
