import React from "react";
import "./testimonials.css";
import { useContext } from "react";
import { UserContext } from "../App";
import Background from "../about/assests/Vector.png";
import { SectionTitle } from "../utils/section-title";
import { Col, Container, Row } from "react-bootstrap";

import AvatarDefault from "../assests/avatar_profile.png";

const Testimonials = () => {
  const data = useContext(UserContext);

  const imagePath = data?.user_info?.profile_picture;

  const items = data?.sections?.testimonial_section?.data;

  return (
    <div className="testimonials-section" id="testimonials">
      <SectionTitle title="Testimovials" white />
      <Container className="testimonials-container">
        <Row>
          {items?.map(({ name, testimonial, title, avatar }, i) => (
            <Col xs={12} sm={6} md={4}>
              <div className="testimonials-card">
                <div className="testimonials-card-text-container">
                  <p className="testimonials-card-text">{testimonial}</p>
                </div>

                <div className="testimonials-center-container">
                  <img
                    className="testimonials-image"
                    src={avatar || AvatarDefault}
                    alt="avatar"
                  />

                  <div className="testimonials-person-container">
                    <p className="testimonials-person-name-text">{name}</p>
                    <p className="testimonials-person-designation-text">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="contact-me-container">
        <div>
          <p className="contact-me-container-text-1">
            Let's collaborate and design something
          </p>

          <p className="contact-me-container-text-2">extraordinary together!</p>
        </div>

        <div className="Catch-me-on-Social-Network-Container">
          <img src={imagePath} alt="Profile picture" className="shape-image" />
          <p className="Catch-me-on-Social-Network-Text">
            Catch me on Social Network
          </p>

          <div className="Links">
            <a className="fb-link" href="">
              <p className="link-text">Fb.</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
