import React, { useContext } from "react";
import "./projects.css";

import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./project-card";
import { UserContext } from "../App";
import { SectionTitle } from "../utils/section-title";
import { Spacer } from "../utils/spacer";

function Projects() {
  const data = useContext(UserContext);

  const items = data?.sections?.project_section?.data?.map((d) => ({
    ...d,
    src: d.link,
  }));

  return (
    <div className="projects" id="projects">
      <Container>
      <Spacer space={20}/>
        <SectionTitle
          title="Projects"
          section="project_section"
        />

        <Spacer />
        <Row>
          {items?.map((p) => (
            <Col md={4} xs={12} lg={4} key={p.src}>
              <ProjectCard {...p} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
