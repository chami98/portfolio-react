import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "./header-icon.png";

import "./media.css";
import { MediaBox } from "./meida-box";

function Media() {
  return (
    <div className="media">
      <Container>
        <Row>
          <Col>
            <div className="title">
              <img src={Icon} className="header-icon" />
              <span>Media</span>
              <img src={Icon} className="header-icon" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            <Row>
            <Col xs={12} >
                <MediaBox src="https://firebasestorage.googleapis.com/v0/b/efolio-portfolio.appspot.com/o/media%2Fscaled_tandem-x-visuals-58d3XxNlK3Y.jpg?alt=media&token=40798f65-4c54-489e-87eb-10220b71d97c" />
              </Col>

            </Row>
            <Row>
              <Col xs={12} md={6}>
                <MediaBox src="https://firebasestorage.googleapis.com/v0/b/efolio-portfolio.appspot.com/o/media%2Fscaled_tandem-x-visuals-58d3XxNlK3Y.jpg?alt=media&token=40798f65-4c54-489e-87eb-10220b71d97c" />
              </Col>
              <Col xs={12} md={6}>
                <MediaBox src="https://firebasestorage.googleapis.com/v0/b/efolio-portfolio.appspot.com/o/media%2Fscaled_tandem-x-visuals-58d3XxNlK3Y.jpg?alt=media&token=40798f65-4c54-489e-87eb-10220b71d97c" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <MediaBox src="https://firebasestorage.googleapis.com/v0/b/efolio-portfolio.appspot.com/o/media%2Fscaled_tandem-x-visuals-58d3XxNlK3Y.jpg?alt=media&token=40798f65-4c54-489e-87eb-10220b71d97c" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Media;
