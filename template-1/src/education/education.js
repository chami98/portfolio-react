import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../utils/section-title";

import "./experiance.css";
import { TimeLineGraph } from "./education-graph";
import { useContext } from "react";
import { UserContext } from "../App";


export const Education = () => {

  const data = useContext(UserContext);

  const items = data?.sections?.education_sec
  ?.data
    ?.sort((a, b) => (a.fromDate < b.fromDate ? 1 : -1))
    ?.map((d, i) => ({
      ...d,
      src: d.link,
      side: i % 2 === 0 ? "left" : "right",
      title : `${d.degree} | ${d.university}`,
      subTitle : d.instituteName,
    }));
 
  return (
    <div>
      <Container className="experiance-section" id="education">
        <SectionTitle title="Education" />
        <Row>
          <Col>
            {/* <p className="sub-text-1">Pushing the best</p>
            <p className="center margin-md">
              <span className="sub-text-2">Outcomes </span>{" "}
              <span className="sub-text-1">Comes</span>
            </p> */}
          </Col>
        </Row>
      </Container>
      <TimeLineGraph items={items} />
    </div>
  );
};
