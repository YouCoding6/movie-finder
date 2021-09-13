import MovieCard from 'components/MovieCard'
import ModalMovieInfo from 'components/ModalMovieInfo'
import { Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const IndexMovies = ({ movies, handleShow, setMovieInfo, movieInfo }) => {

    movies && console.log('movies', movies)
    console.log('movies', movies)

    return (
        <>
            <Container>
                <Row className="justify-content-center mt-5">
                    {movies && movies.map(movie =>
                        <MovieCard movie={movie} key={uuidv4()} handleShow={handleShow} setMovieInfo={setMovieInfo} movieInfo={movieInfo} />)}
                </Row>
            </Container>
        </>
    )
}

export default IndexMovies