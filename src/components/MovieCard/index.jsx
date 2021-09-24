import { Card, Button, Col } from 'react-bootstrap'
import 'components/MovieCard/index.css'
const MovieCard = ({ movie, setMovieInfo, setShow }) => {

    const handleShow = () => {
        setShow(true)
        readMore()
    }

    const readMore = async () => {
        const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=97fa441e`
        const response = await fetch(url)
        const data = await response.json()
        setMovieInfo(data)
    }

    return (
        <Col md={3}>
            <Card style={{ height: '25rem', margin: '1rem' }} className="movie-card mt-5">
                <Card.Img style={{ height: '18rem' }} variant="top" src={movie.Poster} className="image-card" />
                <Card.Body style={{ height: '4rem' }}>
                    <Card.Title className="h6">{movie.Title}</Card.Title>
                </Card.Body>
                <Button style={{ width: '7rem' }} className="btn btn-secondary button-card" onClick={handleShow}>Read More</Button>
            </Card>
        </Col >
    )
}


export default MovieCard