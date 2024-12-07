import PropTypes from "prop-types";

const Company = ({ id, title, description, start, end, logo }) => {
  return (
    <div
      key={id}
      className="text-secondary flex flex-col border-2 border-zinc-500 rounded-xl px-6 py-8 
       gap-8 hover:bg-zinc-700 cursor-pointer"
    >
      <span className="flex justify-between flex-col gap-8 md:items-center md:flex-row w-[100%]">
        <span className="flex items-center ">
          <img src={logo} className="w-8 h-8" />
          <h4 className="text-secondary font-semibold text-2xl ms-4">
            {title}
          </h4>
        </span>
        <h6 className="font-semibold">
          {start} - {end}
        </h6>
      </span>
      <p className="text-zinc-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default Company;

Company.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
};
