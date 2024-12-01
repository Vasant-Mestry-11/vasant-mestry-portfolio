import Button from "../components/Button";
import Logo from "../components/Logo";
import downloadIcon from "../assets/download.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Button>
        Resume
        <img src={downloadIcon} alt="download" />
      </Button>
    </header>
  );
};

export default Header;
