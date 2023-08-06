import { useState } from "react";
import "./fixed-header-mobile.css";
import { Container, Row } from "react-bootstrap";

export const FixedHeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed-header-mobile">
      <div className="menu-holder" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <div
        className={`backdrop ${menuOpen && "visible"}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`menu-wrapper ${menuOpen && "visible"}`}>
        <div className="fixed-header-mobile-container" onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#media">Media</a>
          <a href="#experiance">Experience</a>
          <a href="#awards">Awards</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </div>
    </div>
  );
};
