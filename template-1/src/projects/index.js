import React from "react";
import "./projects.css";

import Icon from "./header-icon.png";
import DownArrowIcon from "./down-arrow.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./project-card";

function Projects() {
  return (
    <div className="projects">
      <Container>
        <Row>
          <Col>
            <div className="title">
              <img src={Icon} className="header-icon" />
              <span>Projects</span>
              <img src={Icon} className="header-icon" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="sub-text-1">Pushing the best</p>
            <p className="sub-text-2">Outcomes</p>
          </Col>
        </Row>

        <Row>
          {[
            ...Array(3).fill({
              src: "http://localhost:3000/static/media/Vector.464be784c6565851a49c.png",
              title: "Education app / Research / UI / UX",
              description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            }),
          ].map((p) => (
            <Col md={4} xs={12} lg={4}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>

        <Row>
          <Col xs={12}>
            <div className="arrow-wrapper">
            <img src={DownArrowIcon} className="down-arrow"/>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
