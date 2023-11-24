function Section({ name, children }) {
  return (
    <>
      <h2>{name}</h2>
      <div>{children}</div>
    </>
  );
}

export default Section;
