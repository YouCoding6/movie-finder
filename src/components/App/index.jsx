import BootstrapNavbar from 'components/BootstrapNavbar'
import IndexMovies from 'components/IndexMovies'
import ModalMovieInfo from 'components/ModalMovieInfo'
import React, { useEffect, useState } from 'react'
import AlertNotFoundMovies from 'components/AlertNotFoundMovies'
const App = () => {

    const [choice, setChoice] = useState(true)
    const [input, setInput] = useState()
    const [requestResponse, setRequestResponse] = useState()
    // const apiKey = "97fa441e"
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState([])

    const [show, setShow] = useState(false)
    const [movieInfo, setMovieInfo] = useState(undefined)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

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
        setRequestResponse(data.Response)
        console.log('data', data)
        console.log('response', requestResponse)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])
    return (
        <div>
            <BootstrapNavbar setInput={setInput} fetchMovies={fetchMovies} />
            {choice && <IndexMovies movies={movies} handleShow={handleShow} />}
            {!choice && movies && requestResponse === "True" && <IndexMovies movies={searchMovies} setMovieInfo={setMovieInfo} />}
            {!choice && movies && requestResponse === "False" && <AlertNotFoundMovies />}
            <ModalMovieInfo handleClose={handleClose} handleShow={handleShow} show={show} movieInfo={movieInfo} />
        </div>
    )
}

export default App