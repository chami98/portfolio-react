import "./contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { ContactLeft } from "./contact-left";
import { ContactForm } from "./contact-form";
import { UserContext } from "../App";
import { useContext } from "react";
import { ContactItem } from "./contact-item";

export const Contact = () => {
  const data = useContext(UserContext);

  const contact_info = data?.contact_info;

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
          <Row>
            {contact_info?.map((c, i) => (
              <Col xs={12} md={6} key={i}>
                <ContactItem {...c} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
