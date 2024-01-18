import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'
import fantasy from './/data/fantasy.json'
import BookButton from './components/BookButton'
import MyFooter from './components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <BookButton />
      {/* <AllTheBooks /> */}
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  )
}

export default App