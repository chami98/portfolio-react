import React from "react";
import "./testimonials.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { SectionTitle } from "../utils/section-title";
import { Col, Container, Row } from "react-bootstrap";

import AvatarDefault from "../assests/avatar_profile.png";
import { OpacityAnimated } from "../utils/opacity-animated";

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
            <Col xs={12} sm={6} md={4} key={testimonial}>
              <OpacityAnimated
                visibiltiy={0.2 * (i + 1) > 1 ? 1 : 0.2 * (i + 1)}
              >
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
              </OpacityAnimated>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
