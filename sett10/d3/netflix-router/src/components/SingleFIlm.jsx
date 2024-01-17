import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleFilm = ({ movie }) => {
    const navigate = useNavigate();

  return (
    <section className="single-movie">
        
            <div className="d-flex p-0 mb-5 single-movie">
                <Card style={{ width: '10rem' }}>
                    <Card.Img className="card-img" src={movie.Poster} onClick={() => navigate('/details')} />
                </Card>
            </div>
        
    </section>
  );
};

export default SingleFilm;