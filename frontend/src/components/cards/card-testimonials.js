import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function KitchenSinkExample() {
  return (
    <div className="card-testimonial">
      <Card className="card-testimonial-body" style={{ width: "23rem" }}>
        <Card.Img variant="top" src="assets/house3.jpg" />
        <Card.Body>
          <Card.Title>RUDY</Card.Title>
          <Card.Title>@rudyberiding</Card.Title>
          <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
          <Card.Text>
            Want a house? Rent Pe is your go to card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card-testimonial-body" style={{ width: "23rem" }}>
        <Card.Img variant="top" src="assets/house3.jpg" />
        <Card.Body>
          <Card.Title>JASON</Card.Title>
          <Card.Title>@jasonMckenzie</Card.Title>
          <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
          <Card.Text>
            It is a well known fact that what he sees is what he buys.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card-testimonial-body" style={{ width: "25rem" }}>
        <Card.Img variant="top" src="assets/house3.jpg" />
        <Card.Body>
          <Card.Title>JOSHUA</Card.Title>
          <Card.Title>@joshuaK</Card.Title>
          <Card.Title>🌟🌟🌟🌟🌟</Card.Title>
          <Card.Text>Simply amazing and hasstle free.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenSinkExample;
