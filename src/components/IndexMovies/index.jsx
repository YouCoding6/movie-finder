import MovieCard from 'components/MovieCard'
import ModalMovieInfo from 'components/ModalMovieInfo'
import { Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

const IndexMovies = ({ movies }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    movies && console.log('movies', movies)
    console.log('movies', movies)
    return (
        <>
            <Container>
                <Row className="justify-content-center mt-5">
                    {movies && movies.map(movie =>
                        <MovieCard movie={movie} key={uuidv4()} handleShow={handleShow} />)}
                </Row>
                <ModalMovieInfo handleClose={handleClose} handleShow={handleShow} show={show} />
            </Container>

        </>
    )
}

export default IndexMovies