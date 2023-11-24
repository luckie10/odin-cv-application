function References({ references }) {
  return (
    <>
      {references.map(({ id, name, number, email }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{number}</p>
          <p>{email}</p>
        </div>
      ))}
    </>
  );
}

export default References;
