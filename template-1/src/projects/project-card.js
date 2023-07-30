import Card from "react-bootstrap/Card";
import Background from "../assests/profile_background.svg";
import { OpacityAnimated } from "../utils/opacity-animated";

export const ProjectCard = ({ preview, title, description }) => {
  return (
    <OpacityAnimated>
      <Card className="project-card">
        <Card.Img variant="top" src={preview || Background} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="card-description">{description}</Card.Text>
        </Card.Body>
      </Card>
    </OpacityAnimated>
  );
};
