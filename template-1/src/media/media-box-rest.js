import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "./header-icon.png";

import "./media.css";
import { MediaBox } from "./meida-box";

export const MediaBoxRest = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col xs={12} sm={6} md={4} key={item.src}>
          <MediaBox rows={1} item={item} />
        </Col>
      ))}
    </Row>
  );
};
