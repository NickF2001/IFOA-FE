import Main from '../components/Main'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const Contact = ({page}) => {
    const params = useParams();

    return (
        <div>
            <h2>Ciao, {params.userName}</h2>
            <Main page={page} />
            <Footer />
        </div>
    )
}

export default Contact