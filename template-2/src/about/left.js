import { useContext } from "react";
import { UserContext } from "../App";
import Icon from "./assests/connect-hand.png";
import { OpacityAnimated } from "../utils/opacity-animated";

export const Left = () => {
  const data = useContext(UserContext);

  console.log(data);

  const userName = data?.user_info?.name;
  const about = data?.user_info?.about;
  const oneLine = data?.user_info?.oneline;

  return (
    <OpacityAnimated>
    <div className="about-left">
      <h5 className="name">I am {userName}</h5>
      <h5 className="one-line">{oneLine}</h5>
      <p className="about-text">{about}</p>
   

      <a href="#contact">
        <div className="connnect-button">
        Let's Chat
        </div>
      </a>
    </div>
    </OpacityAnimated>
  );
};
