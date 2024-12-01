import PropTypes from "prop-types";

const SkillTile = ({ icon, title, alt }) => {
  return (
    <div className="rounded-md border-2 border-primary aspect-square">
      <div
        className="rounded aspect-square flex flex-col items-center justify-center 
            gap-8 p-6 cursor-pointer transition-all delay-100 bg-secondary hover:invert"
      >
        <img src={icon} alt={alt} className="h-14 w-14" />
        <p className="font-bold text-lg">{title}</p>
      </div>
    </div>
  );
};

export default SkillTile;

SkillTile.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
