import { useState } from "react";
import { generateInputFieldElements, deleteStateObject } from "../helpers";
import Duties from "./Duties/Duties";

import "./Experience.style.css";

const exampleExperinces = [
  {
    id: 0,
    company: "Department of Civil Engineering, University of Illinois",
    position: "Graduate Research Assistant",
    date: "20XX-Present",
    dutyIds: [0, 1, 2],
  },
  {
    id: 1,
    company: "Departamento de Ingeniería, UNSJ",
    position: "Undergraduate Consultant",
    date: "20XX",
    dutyIds: [3, 4],
  },
];

function experienceFactory(
  company = "Company",
  position = "Position",
  date = "Date",
) {
  return { id: crypto.randomUUID(), company, position, date, dutyIds: [] };
}

function Experience() {
  const [experiences, setExperiences] = useState(exampleExperinces);

  function addExperience() {
    setExperiences([...experiences, experienceFactory()]);
  }

  function generateExperience(experience, index) {
    const generatorParams = [
      index,
      experience.id,
      experiences,
      setExperiences,
      "experience",
    ];
    const { company, position, date } = generateInputFieldElements(
      experience,
      generatorParams,
    );

    function updateDuties(experienceId) {
      return function (newValue) {
        setExperiences(
          experiences.map((exp) => {
            if (exp.id === experienceId)
              return {
                ...exp,
                dutyIds: newValue,
              };
            return exp;
          }),
        );
      };
    }

    return (
      <div key={experience.id} className="experience-container">
        <h3>
          {position}
          {date}
        </h3>
        <h4>{company}</h4>
        <ul>
          <Duties
            dutyIds={experience.dutyIds}
            onUpdate={updateDuties(experience.id)}
          ></Duties>
        </ul>
        <button
          onClick={() =>
            deleteStateObject(experiences, setExperiences, experience.id)
          }
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <>
      {experiences.map((experience, index) =>
        generateExperience(experience, index),
      )}
      <button onClick={() => addExperience()}>Add</button>
    </>
  );
}

export default Experience;
