import "./App.css";
import Heading from "../Heading";
import Section from "../Section";
import Education from "../Education";
import Experience from "../Experience/Experience";
import References from "../References/References";

function App() {
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
        <References />
      </Section>
    </>
  );
}

export default App;
