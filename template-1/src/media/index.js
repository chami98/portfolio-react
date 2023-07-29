import React, { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "./header-icon.png";

import "./media.css";
import { MediaBox4 } from "./media-box-4";
import { MediaBox3 } from "./media-box-3";
import { UserContext } from "../App";
import { MediaBoxRest } from "./media-box-rest";

function Media() {
  const data = useContext(UserContext);

  const items = data?.sections?.media_sec?.data?.map((d) => ({
    ...d,
    src: d.link,
  }));

  const items4 = [];
  const items3 = [];

  const rest = [];

  while (items.length > 0) {
    if (items4.length + items.length >= 4) {
      items4.push(items.pop());
      continue;
    }

    if (items3.length + items.length >= 3) {
      items3.push(items.pop());
      continue;
    }

    rest.push(items.pop());
  }

  return (
    <div className={`media`}>
      <Container>
        <Row>
          <Col>
            <div className="title">
              <img src={Icon} className="header-icon" />
              <span>Media</span>
              <img src={Icon} className="header-icon" />
            </div>
          </Col>
        </Row>

        {items4.length && <MediaBox4 items={items4} />}
        {items3.length && <MediaBox3 items={items3} />}
        {rest.length && <MediaBoxRest items={rest} />}

      </Container>
    </div>
  );
}

export default Media;
