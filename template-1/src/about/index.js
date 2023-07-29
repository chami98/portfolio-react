import React from "react";
import "./about.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Left } from "./left";
import { Right } from "./right";

function About() {
  return (
    <Container className="about-section" style={{marginTop: '050px'}}>
      <Row>
        <Col xs={12} md={4} style={{ position: "relative" }}>
          <Left />
        </Col>
        <Col xs={12} md={8}>
          <Right/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
