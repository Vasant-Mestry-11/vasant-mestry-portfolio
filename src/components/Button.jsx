import PropTypes from "prop-types";

const Button = ({ children, classNames }) => {
  return (
    <button
      className={`px-5 py-4 bg-primary text-secondary font-semibold rounded items-center 
      flex justify-center gap-2 cursor-pointer hover:bg-neutral
      ${classNames}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};
