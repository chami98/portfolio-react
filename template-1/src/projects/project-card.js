import Card from "react-bootstrap/Card";

export const ProjectCard = ({ src, title, description }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={src}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
