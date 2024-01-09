import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarDark from './components/NavBarDark'
import BookCard from './components/BookCard'
import {Container, Row} from 'react-bootstrap/'

function App() {
  
  return (
    <>
      <NavBarDark />
      <Container>
        <Row>
          <BookCard />
        </Row>
      </Container>
    </>
  )
}

export default App
