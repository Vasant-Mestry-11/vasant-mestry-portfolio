import VariableWeightText from "../components/VariableWeightText";
import { SKILLS } from "../constants/Skills";
import SkillTile from "../components/SkillTile";

const Skills = () => {
  return (
    <section className="flex flex-col gap-16 items-center px-0 md:px-4 lg:px-8">
      <VariableWeightText regularText="My" extraBoldText="Skills" />
      <div
        className="grid grid-cols-2
        sm:grid-cols-3 md:grid-cols-4 
        lg:grid-cols-5
        grid-flow-row gap-8"
      >
        {SKILLS.map(({ icon, title }) => (
          <SkillTile key={title} icon={icon} title={title} alt={title} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
