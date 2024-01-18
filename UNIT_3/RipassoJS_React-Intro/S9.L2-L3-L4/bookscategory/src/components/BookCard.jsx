import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import FantasyBook from '../../books/fantasy.json';
import BookButton from './BookButton';
import './BookCard.css'

const BookCard = () => {
  const [category, setCategory] = useState(FantasyBook);

  return (
  <>
  <BookButton setCategory={setCategory} />

  <div className='d-flex flex-wrap gap-4 justify-content-center'>
    return (
      {category.map((book, index) => {
        const [selected, setSelected] = useState(false);
      return (
      <Card key={book.asin} style={{ width: '18rem', border: selected && '3px solid white'}} className="BookCard text-light" onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Price: {book.price}
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    )
    })}
    )
    
  </div>
  </>
  );
}

export default BookCard;