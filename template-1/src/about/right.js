import "./right.css";
import Icon from "./assests/connect-hand.png";

export const Right = () => {
  return (
    <div className="right">
      <h5 className="title">Crafting Experiences</h5>
      <h5 className="sub-title-1">Inspiring</h5>
      <h5 className="sub-title-2">Connections</h5>
      <h5 className="name">Alex Turner</h5>
      <p className="about-text">
        a creative and versatile Product Designer. As a 'Product Design
        Specialist' at InnovateX Labs, I believe in the power of great design to
        transform ideas into extraordinary user-centric products.
      </p>

      <div className="connnect-button">
        <img
          src={Icon}
          className="connect-icon"
        />

        <h6 className="text">Let's talk</h6>
      </div>
    </div>
  );
};
