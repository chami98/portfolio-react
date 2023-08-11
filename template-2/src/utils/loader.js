import Icon from "./efolio_logo.png";

export const Loader = () => {
  return (
    <div style={{
        width: "fit-content",
        margin: "0 auto",
        marginTop: "25vh"
    }}>
      <img src={Icon} style={{ width: "30vw" }} />
    </div>
  );
};
