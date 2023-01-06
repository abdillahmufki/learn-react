import Card from "react-bootstrap/Card";

const CardCoding = (props) => {
  return (
    <Card className="shadow p-5 mb-5 bg-body rounded">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.deskripsi}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCoding;
