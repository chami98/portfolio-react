import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../utils/section-title";

import "./experiance.css";
import { EducationGraph } from "./education-graph";
import { Spacer } from "../utils/spacer";

const Education = () => {
  return (
    <div>
      <Spacer />
      <Container className="experiance-section" id="experiance">
        <SectionTitle title="Education" section="education_sec" />
      </Container>
      <Spacer space={50} />

      <EducationGraph />
      <Spacer space={20} />
    </div>
  );
};

export default Education;
