import "./contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { ContactLeft } from "./contact-left";
import { ContactForm } from "./contact-form";
import { SectionTitle } from "../utils/section-title";
import { Spacer } from "../utils/spacer";
import { useContext } from "react";
import { UserContext } from "../App";
import { OnlineAccountLink } from "../utils/online-account-link";

export const Contact = () => {
  const data = useContext(UserContext);

  const onlineAccounts = data?.onlineAccounts?.connected_accounts;

  return (
    <div className="contact-section" id="contact">
      <div className="contact-me-container">
        <Container>
          <SectionTitle title="Contact" subTitle="Let's Connect and Innovate" />
        </Container>

        <Container>
          <Row>
            <ContactForm />
          </Row>
        </Container>

        <Spacer space={50}/>
        <Container>
          <div className="account-links">
            {onlineAccounts?.map((acc) => (
              <OnlineAccountLink {...acc} key={acc.account} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
