import { Col, Row } from "react-bootstrap";
import Icon from "./header-icon.png";

import './section-title.css';

export const SectionTitle = ({ title, white=false }) => (
  <Row className="section-title">
    <Col>
      <div className="title">
        <img src={Icon} className="header-icon" alt="header-icon" />
        <span className={`${white && 'white-text'}`}>{title}</span>
        <img src={Icon} className="header-icon" alt="header-icon" />
      </div>
    </Col>
  </Row>
);
