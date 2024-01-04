import Card from "./Card";
import clientImage from "../assets/ClientImage.png";
function TestimonialSection() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-16">
      {[...Array(6).keys()].map((i) => {
        return (
          <Card
            typeSkill={false}
            img={clientImage}
            clientName="Gemma Nolen"
            key={i}
            clientStars={3}
            clientCompany={"Google"}
          >
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </Card>
        );
      })}
    </div>
  );
}

export default TestimonialSection;
