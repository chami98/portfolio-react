import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../utils/section-title";

import "./experiance.css";
import { ExperianceGraph } from "./experiance-graph";


export const Experiance = () => {

 
  return (
    <div>
      <Container className="experiance-section" id="experiance">
        <SectionTitle title="Experience" />
        <Row>
          <Col>
            <p className="sub-text-1">Pushing the best</p>
            <p className="center margin-md">
              <span className="sub-text-2">Outcomes </span>{" "}
              <span className="sub-text-1">Comes</span>
            </p>
          </Col>
        </Row>
      </Container>
      <ExperianceGraph />
    </div>
  );
};
