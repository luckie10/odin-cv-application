import { useState } from "react";
import InputField from "../InputField";
import { objectSetStateHandler } from "../helpers";
import Duties from "./Duties/Duties";

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

  return (
    <>
      {experiences.map(({ id, company, position, date, dutyIds }) => (
        <div key={id}>
          <h3>
            <InputField
              state={company}
              setState={objectSetStateHandler(
                experiences,
                setExperiences,
                id,
                "company",
              )}
            />
          </h3>
          <p>
            <InputField
              state={position}
              setState={objectSetStateHandler(
                experiences,
                setExperiences,
                id,
                "position",
              )}
            />
          </p>
          <p>
            <InputField
              state={date}
              setState={objectSetStateHandler(
                experiences,
                setExperiences,
                id,
                "date",
              )}
            />
          </p>
          <p>
            {dutyIds.map((duty) => (
              <Duties key={duty} dutyId={duty}></Duties>
            ))}
          </p>
        </div>
      ))}
    </>
  );
}

export default Experience;
