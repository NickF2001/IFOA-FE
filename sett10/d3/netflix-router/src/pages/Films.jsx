import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Films = ({page}) => {
    return (
        <div>
            <Navbar />
            <Main page={page} />
            <Footer />
        </div>
    )
}

export default Films