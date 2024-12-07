import PropTypes from "prop-types";

const IconButton = ({ icon, title, link, classNames }) => {
  return (
    <button
      className={`bg-secondary text-primary p-3 border-2 border-neutral rounded-lg
        transition-all delay-100 h-12 w-12 hover:invert ${classNames}
        `}
    >
      <a href={link} target="_blank">
        <img src={icon} alt={title} />
      </a>
    </button>
  );
};

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};
