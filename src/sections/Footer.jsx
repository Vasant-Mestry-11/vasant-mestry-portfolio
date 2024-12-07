import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className="bg-medium">
      <footer className="flex justify-between items-center bg-medium ">
        <Logo invert />
        <p className="font-semibold text-secondary">Made by Vasant Mestry</p>
      </footer>
    </div>
  );
};

export default Footer;
