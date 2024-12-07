import Company from "../components/Company";
import VariableWeightText from "../components/VariableWeightText";
import { COMPANIES } from "../constants/Experience";

const Experience = () => {
  return (
    <div className="bg-medium">
      <section className="flex flex-col gap-16 bg-medium text-secondary items-center">
        <VariableWeightText regularText="My" extraBoldText="Experience" />
        <div className="flex flex-col gap-8 w-[100%]">
          {COMPANIES.map(({ id, title, description, logo, start, end }) => (
            <Company
              key={id}
              id={id}
              title={title}
              description={description}
              logo={logo}
              start={start}
              end={end}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
