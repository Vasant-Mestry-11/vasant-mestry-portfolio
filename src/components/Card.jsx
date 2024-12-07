import PropTypes from "prop-types";
import Open from "../assets/open.svg";

const Card = ({ image, title, url }) => {
  return (
    <div
      className="flex flex-col rounded-lg w-96 overflow-hidden object-cover bg-secondary
      border-2 border-primary justify-between
      "
    >
      <img src={image} />
      <p className="p-4 text-primary text-2xl font-semibold border-2 border-t-primary flex
        items-center justify-between
      ">
        {title}
        <a href={url} target="_blank">
          <img src={Open} />
        </a>
      </p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  url: PropTypes.string,
};
