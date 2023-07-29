import { useContext } from "react";
import { UserContext } from "../App";
import Background from "./assests/Vector.png";

export const Left = () => {
  const data = useContext(UserContext);

  const imagePath = data?.user_info?.profile_picture;
  return (
    <div>
      <img
        src={Background}
        alt="Your SVG"
        style={{ position: "absolute", width: "100%" }}
      />

      <img
        src={imagePath}
        alt="Profile picture"
        className="custom-shape-image"
      />
    </div>
  );
};
