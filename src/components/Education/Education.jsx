import { useState } from "react";
import InputField from "../InputField";
import { objectSetStateHandler, deleteStateObject } from "../helpers";
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

function degreeFactory(title = "Title", school = "School", year = "Year") {
  return {
    id: crypto.randomUUID(),
    title,
    school,
    year,
  };
}

function Education() {
  const [degrees, setDegrees] = useState(exampleDegrees);

  function addDegree() {
    setDegrees([...degrees, degreeFactory()]);
  }

  return (
    <div className="education-container">
      {degrees.map(({ id, title, school, year }) => (
        <div key={id} className="school-container">
          <h3 className="title">
            <InputField
              inputName="education-title"
              state={title}
              setState={objectSetStateHandler(degrees, setDegrees, id, "title")}
            />
            <InputField
              inputName="education-year"
              state={year}
              setState={objectSetStateHandler(degrees, setDegrees, id, "year")}
            />
          </h3>
          <p className="education-school-container">
            <InputField
              inputName="education-school"
              state={school}
              setState={objectSetStateHandler(
                degrees,
                setDegrees,
                id,
                "school",
              )}
            />
          </p>
          <button onClick={() => deleteStateObject(degrees, setDegrees, id)}>
            Delete
          </button>
        </div>
      ))}
      <button onClick={addDegree}>Add</button>
    </div>
  );
}

export default Education;
