import { useContext } from "react";
import { UserContext } from "../App";

import "./right.css";
import { OpacityAnimated } from "../utils/opacity-animated";

export const Right = () => {
  const data = useContext(UserContext);

  const imagePath = data?.user_info?.profile_picture;
  return (
    <div className="right">
      {imagePath ? (
        <OpacityAnimated visibiltiy={0.4}>
          <img
            src={imagePath}
            alt="Profile picture"
            className="custom-shape-image"
          />
        </OpacityAnimated>
      ) : null}
    </div>
  );
};
