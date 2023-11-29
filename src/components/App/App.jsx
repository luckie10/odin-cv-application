import "./App.css";
import Heading from "../Heading";
import Section from "../Section";
import Education from "../Education";
import Experience from "../Experience/Experience";
import References from "../References/References";

function App() {
  const testReferences = [
    { id: 0, name: "Me", number: "519-###-####", email: "blah@blahbl.ah" },
    { id: 1, name: "Myself", number: "313-###-####", email: "foo@b.ar" },
  ];

  return (
    <>
      <Heading />
      <Section name="Education">
        <Education />
      </Section>
      <Section name="Experience">
        <Experience />
      </Section>
      <Section name="References">
        <References references={testReferences} />
      </Section>
    </>
  );
}

export default App;
