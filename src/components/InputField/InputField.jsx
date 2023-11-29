import { useState } from "react";
import "./InputField.style.css";

export default function InputField({ state, setState, type = "input" }) {
  const [isEditable, setIsEditable] = useState(false);
  const InputType = type;

  return (
    <>
      {isEditable ? (
        <InputType
          className="inherit"
          value={state}
          onChange={(event) => setState(event.target.value)}
          onBlur={() => setIsEditable(false)}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEditable(true)}>{state}</span>
      )}
    </>
  );
}
