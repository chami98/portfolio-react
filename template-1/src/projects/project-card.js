import Card from "react-bootstrap/Card";
import Background from "../assests/profile_background.svg";
import { OpacityAnimated } from "../utils/opacity-animated";
import { AnchorHOC } from "../utils/anchor-hoc";

export const ProjectCard = ({ preview, title, description, link }) => {
  return (
    <OpacityAnimated>
      <AnchorHOC link={link}>
        <Card className="project-card">
          <Card.Img variant="top" src={preview || Background} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="card-description">{description}</Card.Text>
          </Card.Body>
        </Card>
      </AnchorHOC>
    </OpacityAnimated>
  );
};
