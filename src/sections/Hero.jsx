import VariableWeightText from "../components/VariableWeightText";
import HeroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-5 order-2 md:order-1">
        <VariableWeightText
          regularText={`Hello I'm`}
          extraBoldText="Vasant Mestry ."
        />
        <VariableWeightText extraBoldText="Frontend Developer" regularText="" />
        <VariableWeightText regularText={`Based In`} extraBoldText="Mumbai ." />
        <p className="text-zinc-500 mt-8">
          {`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.`}
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img src={HeroImage} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
