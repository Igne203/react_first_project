import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CatCard({ cat }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={cat.image} style={{height: '18rem'}}/>
      <Card.Body>
        <Card.Title>{cat.name}</Card.Title>
        <Card.Text>
          Favorite toy: {cat.toy}
        </Card.Text>
        <Button variant="primary">Adopt Me</Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
