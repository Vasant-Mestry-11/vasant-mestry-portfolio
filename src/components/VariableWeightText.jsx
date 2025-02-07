import PropTypes from "prop-types";
const VariableWeightText = ({ invert = false, regularText, extraBoldText, classNames }) => {
  return (
    <h2
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${
        invert && "invert"
      } ${classNames}`}
    >
      {regularText && <span className="me-4">{regularText}</span>}
      <span className="font-extrabold">{extraBoldText}</span>
    </h2>
  );
};

export default VariableWeightText;

VariableWeightText.propTypes = {
  invert: PropTypes.bool,
  regularText: PropTypes.string.isRequired,
  extraBoldText: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};
