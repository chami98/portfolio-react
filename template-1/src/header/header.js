import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from './header-icon.svg'
import './header.css'

export const Header = () => {
  return <Container className="header" id="about">
    <Row>
      <Col xs={12}>
        <img src={Icon} className="header-icon" />
        <h5 className="title">efolio-portfolio</h5>
        <a href="#contact" className="header-nav"><h6>Contact us</h6></a>
        <a href="#" className="header-nav"><h6>Home</h6></a>
      </Col>
    </Row>
  </Container>;
};
