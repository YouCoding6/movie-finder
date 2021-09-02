import BootstrapNavbar from 'components/BootstrapNavbar'
import IndexMovies from 'components/IndexMovies'
import React, { useEffect, useState } from 'react'

const App = () => {

    // const apiKey = "97fa441e"
    const [movies, setMovies] = useState([])
    const fetchAllMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s="ate"&type="movie"&apikey=97fa441e`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])
    return (
        <div>
            <BootstrapNavbar />
            <IndexMovies movies={movies} />
        </div>
    )
}

export default App