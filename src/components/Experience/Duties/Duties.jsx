import { useState } from "react";
import InputField from "../../InputField";

const exampleDuties = {
  0: "Design and execute small-scale testing to validate control algorithms derived to simulate seismic force-resistance.",
  1: "Contribute to multi-disciplinary project aimed at developing visualizations and simulations to predict seismic force damage to various materials.",
  2: "Collaborate and coordinate with faculty, staff scientists, and fellow graduate students across departments.",
  3: "Selected by the General Director of the City Planning Department of San Juan, to participate in the structural analysis and seismic assessment of the Dr. Guillermo Rawson Hospital, one of the largest construction projects to date in the most hazardous seismic area in Argentina",
  4: "Collaborated with two other members of a team to carry out a nonlinear static analysis of the structure – primary objective and main focus of the project – in agreement with FEMA 356 Pre-standard for the Seismic Rehabilitation of buildings",
};

export default function Duties({ dutyId }) {
  const [duties, setDuties] = useState(exampleDuties);

  function setDutiesHandler(id) {
    return function (newValue) {
      setDuties({ ...duties, [id]: newValue });
    };
  }

  return (
    <li>
      <InputField state={duties[dutyId]} setState={setDutiesHandler(dutyId)} />
    </li>
  );
}
