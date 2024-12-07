import PropTypes from "prop-types";

const Input = ({ type, name, value, onChange, classNames }) => {
  return (
    <input
      className={`border-2 border-zinc-500 px-8 py-4 rounded text-primary
              hover:bg-zinc-100 
                focus:drop-shadow-md focus:border-neutral ${classNames}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string,
};
