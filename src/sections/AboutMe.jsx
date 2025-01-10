import VariableWeightText from "../components/VariableWeightText";
import AboutMeIcon from "../assets/aboout-me.svg";
const AboutMe = () => {
  return (
    <section className="flex gap-10 flex-col lg:flex-row">
      <img src={AboutMeIcon} />
      <div className="flex flex-col gap-5">
        <VariableWeightText regularText="About" extraBoldText="Me" />
        <div className="text-zinc-500 flex flex-col gap-5">
          <p className="text-xl">
            {`I'm a passionate, self-proclaimed designer who specializes in frontend development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.`}
          </p>
          <p className="text-xl">
            {`I began my journey as a web developer in 2020, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            5 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as React, TypeScript, Tailwindcss and much more.`}
          </p>
          <p className="text-xl">
            {`When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on hashnpde, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Hashnode where I share tech-related bites and build in public, or you
            can follow me on GitHub.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
