function Experience({ experiences }) {
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
