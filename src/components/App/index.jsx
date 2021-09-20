import BootstrapNavbar from 'components/BootstrapNavbar'
import IndexMovies from 'components/IndexMovies'
import ModalMovieInfo from 'components/ModalMovieInfo'
import React, { useEffect, useState } from 'react'
import AlertNotFoundMovies from 'components/AlertNotFoundMovies'
const App = () => {

    const [choice, setChoice] = useState(true)
    const [input, setInput] = useState()
    const [requestResponse, setRequestResponse] = useState()
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState([])

    const [show, setShow] = useState(false)
    const [movieInfo, setMovieInfo] = useState(undefined)

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
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])
    return (
        <div>
            <BootstrapNavbar setInput={setInput} fetchMovies={fetchMovies} />
            {choice && <IndexMovies movies={movies} setShow={setShow} movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}
            {!choice && movies && requestResponse === "True" && <IndexMovies movies={searchMovies} setShow={setShow} movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}
            {!choice && movies && requestResponse === "False" && <AlertNotFoundMovies />}
            <ModalMovieInfo handleClose={handleClose} show={show} movieInfo={movieInfo} />
        </div>
    )
}

export default App