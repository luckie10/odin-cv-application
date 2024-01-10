import { useState } from "react";
import InputField from "../../InputField";
import { objectSetStateHandler, deleteStateObject } from "../../helpers";

import "./Duties.style.css";

const exampleDuties = [
  {
    id: 0,
    duty: "Design and execute small-scale testing to validate control algorithms derived to simulate seismic force-resistance.",
  },
  {
    id: 1,
    duty: "Contribute to multi-disciplinary project aimed at developing visualizations and simulations to predict seismic force damage to various materials.",
  },
  {
    id: 2,
    duty: "Collaborate and coordinate with faculty, staff scientists, and fellow graduate students across departments.",
  },
  {
    id: 3,
    duty: "Selected by the General Director of the City Planning Department of San Juan, to participate in the structural analysis and seismic assessment of the Dr. Guillermo Rawson Hospital, one of the largest construction projects to date in the most hazardous seismic area in Argentina",
  },
  {
    id: 4,
    duty: "Collaborated with two other members of a team to carry out a nonlinear static analysis of the structure – primary objective and main focus of the project – in agreement with FEMA 356 Pre-standard for the Seismic Rehabilitation of buildings",
  },
];

function dutyFactory(duty = "Duty") {
  return {
    id: crypto.randomUUID(),
    duty,
  };
}

export default function Duties({ dutyIds, onUpdate }) {
  const [duties, setDuties] = useState(exampleDuties);

  function deleteDuty(deleteID) {
    onUpdate(dutyIds.filter((id) => id !== deleteID));
    deleteStateObject(duties, setDuties, deleteID);
  }

  function addDuty() {
    const newDuty = dutyFactory();
    setDuties([...duties, newDuty]);
    onUpdate([...dutyIds, newDuty.id]);
  }

  return (
    <>
      {dutyIds.map((dutyId) => (
        <li key={dutyId}>
          <button onClick={() => deleteDuty(dutyId)}>X</button>
          <InputField
            inputName="experience-duty"
            state={duties.find(({ id }) => id === dutyId).duty}
            setState={objectSetStateHandler(duties, setDuties, dutyId, "duty")}
            type="textarea"
          />
        </li>
      ))}
      <button onClick={addDuty}>+</button>
    </>
  );
}
