import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TvSeries from './pages/TvSeries'
import Films from './pages/Films'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home page='Homepage'/>} />
        <Route path='/TvShows' element={<TvSeries page='TvSeries'/>} />
        <Route path='/Movies' element={<Films page='Films'/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
