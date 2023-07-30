import React, { useContext } from "react";
import "./projects.css";

import Icon from "./header-icon.png";
import DownArrowIcon from "./down-arrow.svg";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./project-card";
import { UserContext } from "../App";
import { SectionTitle } from "../utils/section-title";

function Projects() {
  const data = useContext(UserContext);

  const items = data?.sections?.project_section?.data?.map((d) => ({
    ...d,
    src: d.link,
  }));

  return (
    <div className="projects" id="projects">
      <Container>
      <SectionTitle title="Projects" white/>
        <Row>
          <Col>
            <p className="sub-text-1">Pushing the best</p>
            <p className="sub-text-2">Outcomes</p>
          </Col>
        </Row>

        <Row>
          {items?.map((p) => (
            <Col md={4} xs={12} lg={4}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>

        <Row>
          <Col xs={12}>
            <div className="arrow-wrapper">
              <img src={DownArrowIcon} className="down-arrow" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
