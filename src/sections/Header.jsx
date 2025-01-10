import Button from "../components/Button";
import Logo from "../components/Logo";
import downloadIcon from "../assets/download.svg";

const Header = () => {
  const downloadResume = () => {
    const pdfUrl = "/src/assets/Vasant Mestry.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Button onClick={downloadResume}>
        Resume
        <img src={downloadIcon} alt="download" />
      </Button>
    </header>
  );
};

export default Header;
