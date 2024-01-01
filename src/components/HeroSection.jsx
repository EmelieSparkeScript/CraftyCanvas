import React from "react";
import Button from "./Button";
import heroImage from "../assets/heroimage.png";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-6">
      <div>
        <header>
          <h3 className="font-semibold leading-7 text-xl">Branding | Image making</h3>
          <h1 className="my-6 font-semibold text-7xl">Visual Designer</h1>
        </header>
        <p className="leading-7 mb-12">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <Button label="Contact" href="Contact" />
      </div>
      <img src={heroImage} alt="Visual Designer working on branding and image making" />
    </section>
  );
}

export default HeroSection;
