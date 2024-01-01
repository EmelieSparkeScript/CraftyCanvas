import React from "react";
import Card from "../components/Card.jsx";
import skillsCardIconOne from "../assets/skillsCardIconOne.png"
import skillsCardIconTwo from "../assets/skillsCardIconTwo.png"
import skillsCardIconThree  from "../assets/skillsCardIconThree.png"
function SkillsSection() {
  return (
    <section>
      <ul className="flex flex-col md:flex-row justify-between px-4 md:px-16 py-10 gap-16">
        <Card typeSkill={true} img={skillsCardIconOne} title="Product Design">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</Card>
        <Card typeSkill={true} img={skillsCardIconTwo} title="Visual Design">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</Card>
        <Card typeSkill={true} img={skillsCardIconThree} title="Art Direction">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com </Card>
      </ul>
    </section>
  );
}

export default SkillsSection;
