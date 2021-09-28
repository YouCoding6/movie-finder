
import IndexMovies from 'components/IndexMovies'
import ModalMovieInfo from 'components/ModalMovieInfo'
import React, { useEffect, useState } from 'react'
import AlertNotFoundMovies from 'components/AlertNotFoundMovies'

const Home = ({ input, choice, requestResponse, searchMovies }) => {
    
    const [movies, setMovies] = useState([])
    const [show, setShow] = useState(false)
    const [movieInfo, setMovieInfo] = useState(undefined)

    const handleClose = () => setShow(false)

    const fetchAllMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s="ate"&type="movie"&apikey=97fa441e`)
        const data = await response.json()
        setMovies(data.Search)
    }

    useEffect(() => {
        fetchAllMovies()
    }, [])

    return (
        <>
            {choice && <IndexMovies movies={movies} setShow={setShow} movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}
            {!choice && movies && requestResponse === "True" && <IndexMovies movies={searchMovies} setShow={setShow} movieInfo={movieInfo} setMovieInfo={setMovieInfo} />}
            {!choice && movies && requestResponse === "False" && <AlertNotFoundMovies />}
            <ModalMovieInfo handleClose={handleClose} show={show} movieInfo={movieInfo} />
        </>
    )
}



export default Home 