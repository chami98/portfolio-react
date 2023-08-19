import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../utils/section-title";

import "./experiance.css";
import { ExperianceGraph } from "./experiance-graph";
import { Spacer } from "../utils/spacer";

const Experiance = () => {
  return (
    <div>
      <Spacer />
      <Container className="experiance-section" id="experiance">
        <SectionTitle title="Experiance" section="experience_section" />
      </Container>
      <Spacer space={50} />

      <ExperianceGraph />
      <Spacer space={20} />
    </div>
  );
};

export default Experiance;
