import { useState } from "react";
import InputField from "../InputField";
import "./Education.style.css";

const exampleDegrees = [
  {
    id: 0,
    title: "Doctor of Philosophy in Civil and Environmental Engineering",
    school: "University of Illinois at Urbana-Champaign",
    year: "Expected Fall 20XX",
  },
  {
    id: 1,
    title: "Bachelor of Science in Civil Engineering",
    school: "Universidad Nacional de San Juan, San Juan, Argentina (UNSJ)",
    year: "May 20XX",
  },
];

function Education() {
  const [degrees, setDegrees] = useState(exampleDegrees);

  function setStateHandler(id, stateKey) {
    return function (newValue) {
      setDegrees(
        degrees.map((degree) => {
          if (degree.id === id) return { ...degree, [stateKey]: newValue };
          return degree;
        }),
      );
    };
  }

  return (
    <>
      {degrees.map(({ id, title, school, year }) => (
        <div key={id}>
          <h3>
            <InputField state={title} setState={setStateHandler(id, "title")} />
            <InputField state={year} setState={setStateHandler(id, "year")} />
          </h3>
          <p>
            <InputField
              state={school}
              setState={setStateHandler(id, "school")}
            />
          </p>
          <p></p>
        </div>
      ))}
    </>
  );
}

export default Education;
