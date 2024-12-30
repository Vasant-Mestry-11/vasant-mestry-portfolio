import Card from "../components/Card";
import VariableWeightText from "../components/VariableWeightText";
import CountriesAPI from "../assets/countries-api.png";
import PasswordGenerator from "../assets/password-generator.png";
import RatingComponent from "../assets/rating-component.png";
import TriMurtiArts from "../assets/trimurti-arts.png";

const Projects = () => {
  return (
    <div className="bg-medium">
      <section className="text-secondary flex items-center flex-col gap-16">
        <VariableWeightText regularText="My" extraBoldText="Projects" />
        <div className="gap-10 flex-col xl:flex-row grid sm:grid-cols-3">
          <Card
            image={CountriesAPI}
            title="Countries API"
            url="https://countries-search-rest-api.netlify.app/"
          />
          <Card
            image={PasswordGenerator}
            title="Password Generator"
            url="https://develop-password-generator.netlify.app/"
          />
          <Card
            image={RatingComponent}
            title="Rating Component"
            url="https://interactive-rating-frontend-mentor.netlify.app/"
          />
          <Card
            image={TriMurtiArts}
            title="Tri Murti Arts"
            url="https://trimurti-arts.vercel.app/"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
