import Background from "./assests/Vector.png";

export const Left = () => {
  return (
    <div>
      <img
        src={Background}
        alt="Your SVG"
        style={{ position: "absolute", width: "100%" }}
      />
      
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/efolio-portfolio.appspot.com/o/profile_picture%2Fimage_cropper_1680248184034.jpg?alt=media&token=53a40862-eaa6-4725-851f-a57383259231"
        }
        alt="Your SVG"
        className="custom-shape-image"
      />
      
    </div>
  );
};
