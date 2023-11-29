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

  return (
    <>
      {degrees.map(({ id, title, school, year }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{school}</p>
          <p>{year}</p>
        </div>
      ))}
    </>
  );
}

export default Education;
