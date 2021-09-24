import MovieCard from 'components/MovieCard'
import { Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import 'components/IndexMovies/index.css'

const IndexMovies = ({ movies, setMovieInfo, movieInfo, setShow }) => {

    return (
        <div className="index-body">
            <Container>
                <Row className="justify-content-center">
                    {movies && movies.map(movie =>
                        <MovieCard movie={movie} key={uuidv4()} setMovieInfo={setMovieInfo} setShow={setShow} />)}
                </Row>
            </Container>
        </div>

    )
}

export default IndexMovies