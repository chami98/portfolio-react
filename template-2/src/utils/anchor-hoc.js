import { useContext } from "react";
import { UserContext } from "../App";
import { handleLinkClick } from "../viewInfo";

export const AnchorHOC = ({ children, link }) => {
  const data = useContext(UserContext);

  const unique_user_id = data?.user_info?.id;

  const handleClick = () => {
    handleLinkClick(unique_user_id, link);
  };

  if (link && link !== "#") {
    return (
      <a href={link} target="_blank" onClick={handleClick}>
        {children}
      </a>
    );
  }

  return children;
};
