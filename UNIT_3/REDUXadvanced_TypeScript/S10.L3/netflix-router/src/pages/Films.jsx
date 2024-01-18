import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


const Films = () => {
    
    const location = useLocation()
    const searchTerms = new URLSearchParams(location.search).get('cerca')


    const [search, setSearch] = useState("")
    const [films, setFilms] = useState([])

    const fetchData = async () => {
        const resp = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + search)
        const data = await resp.json()
        setFilms(data.data)
    }

    useEffect(() => {
        if (searchTerms?.length > 2)
            setSearch(searchTerms)
    }, [])

    useEffect(() => {
        if (search?.length > 2)
        fetchData()
    }, [search])


    return (
        <>
            <div style={{ minHeight: "70vh"}} className="my-5 text-center">
                <h1>Risultati ricerca</h1>
                <ul>
                {films?.length > 0 && films.map((film) => 
                    <li key={film.imdbID}>{film.Title} - {(film.duration/100).toFixed(2)} - <Link to={`https://www.omdbapi.com/?s=${film.imdbID}&apikey=c642f00a`}>Scheda Film</Link></li>
                    )
                }
                </ul>
            </div>
        </>
    )
}


export default Films