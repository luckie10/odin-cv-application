import { useState } from "react";

const exampleExperinces = [
  {
    id: 0,
    company: "Department of Civil Engineering, University of Illinois",
    position: "Graduate Research Assistant",
    date: "20XX-Present",
    duties: [
      "Design and execute small-scale testing to validate control algorithms derived to simulate seismic force-resistance.",
      "Contribute to multi-disciplinary project aimed at developing visualizations and simulations to predict seismic force damage to various materials.",
      "Collaborate and coordinate with faculty, staff scientists, and fellow graduate students across departments.",
    ],
  },
  {
    id: 1,
    company: "Departamento de Ingeniería, UNSJ",
    position: "Undergraduate Consultant",
    date: "20XX",
    duties: [
      "Selected by the General Director of the City Planning Department of San Juan, to participate in the structural analysis and seismic assessment of the Dr. Guillermo Rawson Hospital, one of the largest construction projects to date in the most hazardous seismic area in Argentina",
      "Selected by the General Director of the City Planning Department of San Juan, to participate in the structural analysis and seismic assessment of the Dr. Guillermo Rawson Hospital, one of the largest construction projects to date in the most hazardous seismic area in Argentina",
    ],
  },
];

function Experience() {
  const [experiences, setExperiences] = useState(exampleExperinces);
  return (
    <>
      {experiences.map(({ id, company, position, date, duties }) => (
        <div key={id}>
          <h3>{company}</h3>
          <p>{position}</p>
          <p>{date}</p>
          <p>{duties}</p>
        </div>
      ))}
    </>
  );
}

export default Experience;
