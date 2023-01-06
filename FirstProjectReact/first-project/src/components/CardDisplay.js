import { Card, Button } from "react-bootstrap";

const CardDisplay = (props) => {
  return (
    <Card
      className="shadow p-5 mb-5 bg-body rounded my-3 my-3"
      style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.paragraph}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardDisplay;
