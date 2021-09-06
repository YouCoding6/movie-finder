import MovieCard from 'components/MovieCard'
import { Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const IndexMovies = ({ movies }) => {
    movies && console.log('movies', movies)
    console.log('movies', movies)
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                {movies && movies.map(movie =>
                    <MovieCard movie={movie} key={uuidv4()} />)}
            </Row>
        </Container>

    )
}

export default IndexMovies