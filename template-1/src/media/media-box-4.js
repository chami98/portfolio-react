import React from "react";
import { Col, Row } from "react-bootstrap";

import "./media.css";
import { MediaBox } from "./meida-box";

export const MediaBox4 = ({items}) => {
  return (
    <Row>
      <Col xs={12} md={8}>
        <Row>
          <Col xs={12}>
            <MediaBox rows={1} item={items[0]} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <MediaBox
              rows={1}
              item={items[1]}
            />
          </Col>
          <Col xs={12} md={6}>
            <MediaBox
              rows={1}
              item={items[2]}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <MediaBox
          rows={2}
          item={items[3]}
          />
      </Col>
    </Row>
  );
}


