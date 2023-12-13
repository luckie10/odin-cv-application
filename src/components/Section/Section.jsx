import "./Section.style.css";

function Section({ name, children }) {
  return (
    <div className={"section " + name.toLowerCase()}>
      <h2>{name}</h2>
      {children}
    </div>
  );
}

export default Section;
