import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarDark from './components/NavBarDark'
import BookCard from './components/BookCard'
import BookFooter from './components/BookFooter'
import {Container, Row} from 'react-bootstrap/'
import Jumbotron from './components/Jumbotron'

function App() {
  
  return (
    <>
      <NavBarDark />
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <BookCard />
        </Row>
      </Container>
      <BookFooter />
    </>
  )
}

export default App
