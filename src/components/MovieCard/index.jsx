import { Card, Button } from 'react-bootstrap'





const MovieCard = ({ movie }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}


export default MovieCard