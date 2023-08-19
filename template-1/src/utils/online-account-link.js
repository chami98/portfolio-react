import { useContext } from "react";
import { UserContext } from "../App";
import { handleLinkClick } from "../viewInfo";
import "./online-account-link.css";

export const OnlineAccountLink = ({ account, url }) => {
  const data = useContext(UserContext);

  const unique_user_id = data?.user_info?.id;

  return (
    <a
      href={url}
      target="_blank"
      className="online-account-link"
      onClick={() => handleLinkClick(unique_user_id, url)}
    >
      <i className={`fab fa-${account}`}></i>
    </a>
  );
};
