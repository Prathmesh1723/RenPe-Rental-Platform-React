import Card from 'react-bootstrap/Card';
import './card.css';

function BgColorExample() {
  return (
    <div className='card-featured d-flex'>
    <Card
          bg='light'
          key='Light'
          text='dark'
          style={{ width: '25rem' }}
          className="mb-2"
        >
    <Card.Img variant="top" src="/assets/hotel_room.jpg" />
          <Card.Body>
            <Card.Title>Over Yondar Cay Resort-Bahamas</Card.Title>
            <Card.Title>$180,000</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg='light'
          key='Light'
          text='dark'
          style={{ width: '25rem' }}
          className="mb-2"
        >
    <Card.Img variant="top" src="/assets/hotel_room.jpg" />
          <Card.Body>
            <Card.Title>Villa Rica Rora in Ibiza</Card.Title>
            <Card.Title>$150,000</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default BgColorExample;