import "./App.css";
import Heading from "../Heading";
import Section from "../Section";
import Education from "../Education";
import Experience from "../Experience/Experience";
import References from "../References/References";

function App() {
  const testDegrees = [
    { id: 0, title: "BsCN", school: "UoW", year: 2014 },
    { id: 1, title: "MBA", school: "Booth", year: 2023 },
  ];

  const testExperiences = [
    {
      id: 0,
      company: "HFHS",
      position: "RN",
      date: "2017-Present",
      duties: "blah",
    },
    {
      id: 1,
      company: "HBPO",
      position: "GL",
      date: "2009-2014",
      duties: "blah blah",
    },
  ];

  const testReferences = [
    { id: 0, name: "Me", number: "519-###-####", email: "blah@blahbl.ah" },
    { id: 1, name: "Myself", number: "313-###-####", email: "foo@b.ar" },
  ];

  return (
    <>
      <Heading />
      <Section name="Education">
        <Education degrees={testDegrees} />
      </Section>
      <Section name="Experience">
        <Experience experiences={testExperiences} />
      </Section>
      <Section name="References">
        <References references={testReferences} />
      </Section>
    </>
  );
}

export default App;
