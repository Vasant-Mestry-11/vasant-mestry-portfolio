import VariableWeightText from "../components/VariableWeightText";
import HeroImage from "../assets/hero.svg";
import IconButton from "../components/IconButton";
import GithubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import HashnodeIcon from "../assets/hashnode.svg";
import InstagramIcon from "../assets/instagram.svg";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10 items-center">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="flex flex-col gap-8 md:w-[70%]">
          <div className="flex flex-col gap-3">
            <VariableWeightText
              regularText={`Hello I'm`}
              extraBoldText="Vasant Mestry ."
            />
            <VariableWeightText
              extraBoldText="Frontend Developer"
              regularText=""
            />
            <VariableWeightText
              regularText={`Based In`}
              extraBoldText="Mumbai ."
            />
          </div>
          <p className="text-zinc-500 mt-2 text-md">
            {`I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.`}
          </p>
          <div className="mb-2 left-4 flex gap-6 ">
            <IconButton
              icon={GithubIcon}
              link={`https://github.com/Vasant-Mestry-11`}
            />
            <IconButton
              icon={LinkedInIcon}
              link={`https://www.linkedin.com/in/vasant-mestry/`}
            />
            <IconButton
              icon={HashnodeIcon}
              link={`https://vasantmestry.hashnode.dev/`}
            />
            <IconButton
              icon={InstagramIcon}
              link={`https://www.instagram.com/_vasantmestry_/`}
            />
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
