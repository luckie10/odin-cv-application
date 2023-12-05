import { useState } from "react";

const exampleReferences = [
  {
    id: 0,
    name: "Ted S. Visor",
    title: "Professor and Graduate Programs Head",
    department: "Department of Civil Engineering",
    organization: "University of Illinois at Urbana-Champaign",
    number: "(217) 244 – 2345",
    email: "blah@blahbl.ah",
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

  return (
    <>
      {references.map(
        ({ id, name, title, department, organization, number, email }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{number}</p>
            <p>{email}</p>
          </div>
        ),
      )}
    </>
  );
}

export default References;
