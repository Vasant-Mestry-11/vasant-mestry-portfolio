import logo from "../assets/logo.svg";
import PropTypes from "prop-types";

const Logo = ({ invert = false }) => {
  return (
    <div className={`flex items-center gap-3 ${invert && "invert"}`}>
      <img className="h-10 w-10" src={logo} alt="logo" />
      <h2 className="leading-5 text-lg font-bold">Vasant Mestry</h2>
    </div>
  );
};

export default Logo;

Logo.propTypes = {
  invert: PropTypes.bool,
};
