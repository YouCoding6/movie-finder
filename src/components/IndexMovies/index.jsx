import MovieCard from 'components/MovieCard'
import { Container, Row } from 'react-bootstrap'
const IndexMovies = ({ movies }) => {
    movies && console.log('movies', movies)
    console.log('movies', movies)
    return (
        <Container>
            <Row className="justify-content-center">
                {movies && movies.map(movie =>
                    <MovieCard movie={movie} />)}
            </Row>
        </Container>

    )
}


export default IndexMovies