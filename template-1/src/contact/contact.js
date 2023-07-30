import "./contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { ContactLeft } from "./contact-left";
import {ContactForm} from "./contact-form"

export const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-me-container">
        <div>
          <p className="contact-me-container-text-1">
            Let's collaborate and design something
          </p>

          <p className="contact-me-container-text-2">extraordinary together!</p>
        </div>

        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ContactLeft />
            </Col>
            <Col xs={12} md={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
