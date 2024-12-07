import { useState } from "react";
import Input from "../components/Input";
import VariableWeightText from "../components/VariableWeightText";

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
    <section className="flex">
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
        <Input
          type="textarea"
          name="help"
          value={help}
          onChange={handleInputChange}
          rows={12}
          cols={10}
          placeholder="How can I help ?"
        />
      </div>
    </section>
  );
};

export default Contact;
