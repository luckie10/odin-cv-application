import { useState } from "react";
import { generateInputField } from "../helpers";

const exampleReferences = [
  {
    id: 0,
    name: "Ted S. Visor",
    title: "Professor and Graduate Programs Head",
    department: "Department of Civil Engineering",
    organization: "University of Illinois at Urbana-Champaign",
    number: "(217) 244 – 2345",
    email: "email@illinois.edu",
  },
  {
    id: 1,
    name: "John D. Faculty",
    title: "Assistant Professor",
    department: "Department of Civil Engineering",
    organization: "University of Illinois at Urbana-Champaign",
    number: "(217) 244 – 1234",
    email: "email@illinois.edu",
  },
];

function References() {
  const [references, setReferences] = useState(exampleReferences);

  function genRefElement(reference, generatorParams) {
    const elements = {};

    Object.keys(reference).forEach((key) => {
      elements[key] = generateInputField(key, ...generatorParams);
    });

    return elements;
  }

  function generateReference(reference, index) {
    const generatorParams = [index, reference.id, references, setReferences];
    const { name, title, department, organization, number, email } =
      genRefElement(reference, generatorParams);

    return (
      <div key={reference.id}>
        <h3>
          {name}, {title}
        </h3>
        <p>{department}</p>
        <p>{organization}</p>
        <p>
          {number}, {email}
        </p>
      </div>
    );
  }

  return (
    <>
      {references.map((reference, index) =>
        generateReference(reference, index),
      )}
    </>
  );
}

export default References;
