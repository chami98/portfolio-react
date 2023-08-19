import { Col, Row } from "react-bootstrap";
import { getDefaultDescForSection } from "../viewInfo";


import './section-title.css';

export const SectionTitle = ({ title, section }) => {
  
  const subTitle = (section && getDefaultDescForSection(section)) || null;
  return (
  <Row className="section-title">
    <Col>
      <h5 className="title">{title}</h5>
      {subTitle ? <h5 className="sub-title">{subTitle}</h5> : null }
    </Col>
  </Row>
)
  };
