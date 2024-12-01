import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img className="h-10 w-10" src={logo} alt="logo" />
      <h2 className="leading-5 text-lg font-bold">Vasant Mestry</h2>
    </div>
  );
};

export default Logo;
