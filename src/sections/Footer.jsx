import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="flex justify-between items-center bg-primary ">
        <Logo invert />
        <p className="font-semibold text-secondary">Made by Vasant Mestry</p>
      </footer>
    </div>
  );
};

export default Footer;
