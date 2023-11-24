function Education({ degrees }) {
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
