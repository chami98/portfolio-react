import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from './header-icon.svg'
import './header.css'

export const Header = () => {
  return (
    <div className="fixed-header-container">
      <div className="fixed-header">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#media">Media</a>
        <a href="#experiance">Experience</a>
        <a href="#awards">Awards</a>
        <a href="#testimonials">Testimonials</a>
      </div>
    </div>
  );
};
