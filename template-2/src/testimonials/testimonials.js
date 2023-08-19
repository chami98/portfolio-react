import React from "react";
import "./testimonials.css";
import { useContext } from "react";
import { UserContext } from "../App";
import { SectionTitle } from "../utils/section-title";
import { Col, Container, Row } from "react-bootstrap";

import AvatarDefault from "../assests/avatar_profile.png";
import { OpacityAnimated } from "../utils/opacity-animated";
import { Spacer } from "../utils/spacer";

const Testimonials = () => {
  const data = useContext(UserContext);

  const imagePath = data?.user_info?.profile_picture;

  const items = data?.sections?.testimonial_section?.data;

  return (
    <div className="testimonials-section" id="testimonials">
      <Spacer />
      <Container>
        <SectionTitle title="Testimonials" subTitle="Impactful Contributions" />
      </Container>

      <Container className="testimonials-container">
        <Row>
          {items?.map(({ name, testimonial, title, avatar }, i) => (
            <Col xs={12} md={4} key={testimonial}>
              <OpacityAnimated
                visibiltiy={0.2 * (i + 1) > 1 ? 1 : 0.2 * (i + 1)}
              >
                <div className="testimonials-card">
                  <img
                    className="testimonials-image"
                    src={avatar || AvatarDefault}
                    alt="avatar"
                  />
                  <p className="testimonials-person-name-text">{name}, {title}</p>
                  <p className="testimonials-card-text">{testimonial}</p>
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
