import { Col, Row } from "react-bootstrap";
import Icon from "./header-icon.png";

import './section-title.css';

export const SectionTitle = ({ title, subTitle }) => (
  <Row className="section-title">
    <Col>
      <h5 className="title">{title}</h5>
      <h5 className="sub-title">{subTitle}</h5>
    </Col>
  </Row>
);
