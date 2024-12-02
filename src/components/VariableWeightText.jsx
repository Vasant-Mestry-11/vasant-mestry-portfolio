import PropTypes from "prop-types";
const VariableWeightText = ({ invert = false, regularText, extraBoldText }) => {
  return (
    <h2 className={`text-5xl ${invert && "invert"}`}>
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
};
