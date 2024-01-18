import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './components/404'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home page='Homepage'/>} />
        <Route path='/contatti/:username' element={<Contact page='Contatti'/>} />
        <Route path='/chisiamo' element={<About page='Chi Siamo'/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
