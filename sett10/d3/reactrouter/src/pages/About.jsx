import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const About = ({page}) => {
    return (
        <div>
            <Header />
            <Main page={page} />
            <Footer />
        </div>
    )
}

export default About