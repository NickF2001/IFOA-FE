import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = ({page}) => {
    return (
        <div>
            <Navbar />
            <Main page={page} />
            <Footer />
        </div>
    )
}

export default Home