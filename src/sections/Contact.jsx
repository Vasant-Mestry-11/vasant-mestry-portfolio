import { useState } from "react";
import Input from "../components/Input";
import VariableWeightText from "../components/VariableWeightText";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/x.svg";
import Textarea from "../components/Textarea";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    website: "",
    help: "",
  });

  const { name, email, website, help } = details;

  const handleInputChange = (e) => {
    setDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="flex gap-16 flex-col md:flex-row md:gap-32 ">
      <div className="flex flex-col gap-5 w-[100%]">
        <div className="flex flex-col gap-5 w-[100%]">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your name"
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="website"
            value={website}
            onChange={handleInputChange}
            placeholder="Your website (if exists)"
          />
          <Textarea
            type="textarea"
            name="help"
            value={help}
            onChange={handleInputChange}
            rows={5}
            cols={10}
            placeholder="How can I help ?"
          />
        </div>
        <div className="flex gap-5">
          <Button>Get In Touch</Button>
          <IconButton
            icon={Facebook}
            link="https://www.facebook.com/prathameshvm48/"
            classNames="h-14 w-14"
          />
          <IconButton
            icon={Twitter}
            link="https://x.com/_vasantmestry_"
            classNames="h-14 w-14"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <VariableWeightText regularText="Let's" extraBoldText="talk for" />
          <VariableWeightText extraBoldText="Something special" />
          <p className="text-zinc-500">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold flex items-center gap-4 text-xl md:text-2xl ">
            <i className="bx bxl-gmail"></i>:
            <span>vasantmestry07@gmail.com</span>
          </h3>
          <p className="font-semibold flex items-center gap-4 text-lg md:text-xl">
            <i className="bx bx-mobile"></i>: <span>+91-9769315424</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
