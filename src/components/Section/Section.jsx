import "./Section.style.css";

function Section({ name, children }) {
  return (
    <div className={"section " + name.toLowerCase()}>
      <h2>{name}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Section;
