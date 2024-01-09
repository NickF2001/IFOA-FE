import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FantasyBook from '../../books/fantasy.json';
import HistoryBook from '../../books/history.json';
import HorrorBook from '../../books/horror.json';
import RomanceBook from '../../books/romance.json';
import SciFiBook from '../../books/scifi.json';

const BookButton = ({setCategory}) => {
  return (
    <>
    <Container>
      <Button className="mx-2 mb-4 border-0 btn-success" onClick={() => setCategory(FantasyBook)}>Fantasy</Button>
      <Button className="mx-2 mb-4 border-0 btn-warning" onClick={() => setCategory(HistoryBook)}>History</Button>
      <Button className="mx-2 mb-4 border-danger text-danger btn-dark" onClick={() => setCategory(HorrorBook)}>Horror</Button>
      <Button className="mx-2 mb-4 border-0 btn-danger" onClick={() => setCategory(RomanceBook)}>Romance</Button>
      <Button className="mx-2 mb-4 border-0 btn-primary" onClick={() => setCategory(SciFiBook)}>SciFi</Button>
    </Container>
    </>
  );
}

export default BookButton;