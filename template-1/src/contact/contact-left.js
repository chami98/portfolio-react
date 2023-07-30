import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../App";
import { OnlineAccountLink } from "../utils/online-account-link";
import { OpacityAnimated } from "../utils/opacity-animated";

export const ContactLeft = () => {
  const data = useContext(UserContext);

  const imagePath = data?.user_info?.profile_picture;

  const onlineAccounts = data?.onlineAccounts?.connected_accounts;

  console.log("onlineAccounts", onlineAccounts);

  return (
    <OpacityAnimated>
      <Container>
        <Row>
          <img src={imagePath} alt="Profile picture" className="shape-image" />
        </Row>
        <Row>
          <p className="Catch-me-on-Social-Network-Text">
            Catch me on Social Network
          </p>
        </Row>
        <Row>
          <Col>
            <div className="account-links">
              {onlineAccounts?.map((acc) => (
                <OnlineAccountLink {...acc} key={acc.account} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </OpacityAnimated>
  );
};
