import Navbar from '../components/Navbar'
import FilmContainer from '../components/FilmContainer'
import Footer from '../components/Footer'
import { Row, Container } from 'react-bootstrap';

const TvSeries = ({ page }) => {

  return (
    <> 
    <Navbar />
      <div page={page}>
        <Row className='mt-4 mb-1'>
          <Row><h4 className="text-light">Scream</h4></Row>
          <FilmContainer saga='Scream'/>
        </Row>

        <Row className='mt-4 mb-1'>
          <Row><h4 className="text-light">Saw</h4></Row>
          <FilmContainer saga='Saw'/>
        </Row>

        <Row className='mt-4 '>
          <Row><h4 className="text-light">Friday the 13th</h4></Row>
          <FilmContainer saga='Friday the 13th'/>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default TvSeries;
