import Error404 from "../components/404";
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = ({page}) => {
    return (
        <div>
            <Header />
            <Error404></Error404>
            <Footer />
        </div>
    )
}

export default NotFound