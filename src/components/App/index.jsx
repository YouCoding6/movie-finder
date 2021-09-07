import BootstrapNavbar from 'components/BootstrapNavbar'
import IndexMovies from 'components/IndexMovies'
import React, { useEffect, useState } from 'react'

const App = () => {

    const [choice, setChoice] = useState(true)
    const [input, setInput] = useState()
    // const apiKey = "97fa441e"
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState([])

    const fetchAllMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s="ate"&type="movie"&apikey=97fa441e`)
        const data = await response.json()
        setMovies(data.Search)
    }

    const fetchMovies = async () => {
        const url = `https://www.omdbapi.com/?s=${input}&apikey=97fa441e`
        const response = await fetch(url)
        const data = await response.json()
        setSearchMovies(data.Search)
        setChoice(false)
        console.log('data', data)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])
    return (
        <div>
            <BootstrapNavbar setInput={setInput} fetchMovies={fetchMovies} />
            {choice && <IndexMovies movies={movies} />}
            {!choice && movies && <IndexMovies movies={searchMovies} />}
        </div>
    )
}

export default App