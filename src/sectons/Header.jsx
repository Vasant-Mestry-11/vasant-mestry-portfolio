import Logo from "../components/Logo";

const Header = () => {
  return <header className="flex justify-between items-center">
    <Logo />
    <button>Resume</button>
  </header>;
};

export default Header;
