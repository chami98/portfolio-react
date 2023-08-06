import React  from "react";
import { Col, Row } from "react-bootstrap";

import "./media.css";
import { MediaBox } from "./meida-box";

export const MediaBoxRest = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col xs={12} md={4} key={item.src}>
          <MediaBox rows={1} item={item} />
        </Col>
      ))}
    </Row>
  );
};
