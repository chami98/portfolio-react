import React, { useContext } from "react";
import "./awards.css"; // Import the newly created CSS file
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { UserContext } from "../App";

import Background from "../assests/profile_background.svg";
import { OpacityAnimated } from "../utils/opacity-animated";
import { SectionTitle } from "../utils/section-title";

const Awards = () => {
  const data = useContext(UserContext);

  const items = data?.sections?.awards_section?.data?.map((d) => ({
    ...d,
    src: d.link,
  }));

  const itemLength = items?.length || 1;

  let preCols = itemLength === 2 ? 1 : 0;

  return (
    <>
      <div className="awards-section" id="awards">
        <OpacityAnimated visibiltiy={0.9}>
          <div className="awards-container">
            <Container>
              <SectionTitle title="Awards" white section="awards_section" />
            </Container>

            {/* <div className="awards-content">
              <p className="awards-heading">Designing Innovation,</p>
              <div className="awards-subheading">
                <p className="award-shaping">Shaping</p>
                <p className="award-the-future">the Future</p>
              </div>
            </div> */}
          </div>
        </OpacityAnimated>
      </div>

      <Container className="awards-showcase">
        <Row>
          {[...Array(preCols)].map((_, i) => (
            <Col md={3} key={i} />
          ))}

          {items?.map(({ link, image, title, year, description }, i) => (
            <Col xs={12} md={3} key={i}>
              <OpacityAnimated visibiltiy={0.6}>
                <Card className="award-card">
                  <Card.Img
                    className="award-image"
                    variant="top"
                    src={image || Background}
                  />
                  <Card.Body className="awards-body">
                    <Card.Title className="award-card-title">{`${title} ${year}`}</Card.Title>
                    <Card.Text className="award-card-text">
                      {description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </OpacityAnimated>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Awards;
