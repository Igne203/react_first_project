import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DogsCard({ dog }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={dog.image} style={{ height: '18rem', borderRadius: '50%', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{dog.name}</Card.Title>
        <Card.Text>
          Favorite food: {dog.food}
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
  );
}

export default DogsCard;
