import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <div style={divStyle}>
                <Link to='/'>Home</Link>
                <Link to='/contatti'>Contatti</Link>
                <Link to='/chisiamo'>About</Link>
            </div>
        </div>
    )

}

// definisco il mio style qua sotto
const divStyle= {
    display: 'flex',
    justifyContent: 'space-around',

}


export default Header