import { useContext } from "react";
import { UserContext } from "../App";

import "./right.css";
import Icon from "./assests/connect-hand.png";

export const Right = () => {
  const data = useContext(UserContext);

  const userName = data?.user_info?.name;
  const about = data?.user_info?.about;
  return (
    <div className="right">
      <h5 className="title">Crafting Experiences</h5>
      <h5 className="sub-title-1">Inspiring</h5>
      <h5 className="sub-title-2">Connections</h5>
      <h5 className="name">{userName}</h5>
      <p className="about-text">
        {about}
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
