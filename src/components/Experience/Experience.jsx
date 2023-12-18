import { useState } from "react";
import { generateInputFieldElements } from "../helpers";
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

function Experience() {
  const [experiences, setExperiences] = useState(exampleExperinces);

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

    return (
      <div key={experience.id} className="experience-container">
        <h3>
          {position}
          {date}
        </h3>
        <h4>{company}</h4>
        <ul>
          {experience.dutyIds.map((duty) => (
            <Duties key={duty} dutyId={duty}></Duties>
          ))}
        </ul>
      </div>
    );
  }

  return experiences.map((experience, index) =>
    generateExperience(experience, index),
  );
}

export default Experience;
