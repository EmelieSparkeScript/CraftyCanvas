import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import LogoBar from "./components/LogoBar.jsx";

import "./App.css";

function App() {
  return (
    <div className="container mx-auto text-carbon-fiber text-base font-epilogue">
      <Navbar />
      <HeroSection/>
      <LogoBar />
    </div>
  );
}

export default App;
