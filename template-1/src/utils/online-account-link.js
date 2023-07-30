import './online-account-link.css';

export const OnlineAccountLink = ({
  account, url
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="online-account-link"
    >
      <i className={`fab fa-${account}`}></i>
    </a>
  );
};
