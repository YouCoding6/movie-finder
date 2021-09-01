import BootstrapNavbar from 'components/BootstrapNavbar'
import IndexMovies from 'components/IndexMovies'
import React, { useEffect } from 'react'

const App = () => {

    // const apiKey = "97fa441e"

    const fetchAllMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s="ate"&type="movie"&apikey=97fa441e`)
        const data = response.json()
        data && console.log(data)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])
    return (
        <div>
            <BootstrapNavbar />
            <IndexMovies />
        </div>
    )
}

export default App