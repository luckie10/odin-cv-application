import { useState } from "react";
import InputField from "../InputField";
import "./Heading.style.css";

function Heading() {
  const [name, setName] = useState("Full Name");
  const [phoneNumber, setPhoneNumber] = useState("###-###-####");
  const [email, setEmail] = useState("email@foo.bar");

  return (
    <>
      <header>
        <h1>
          <InputField type="input" state={name} setState={setName} />
        </h1>
        <div className="contact-info">
          <InputField state={phoneNumber} setState={setPhoneNumber} />
          •
          <InputField state={email} setState={setEmail} />{" "}
        </div>
      </header>
    </>
  );
}

export default Heading;
