import { Card, Button, Col } from 'react-bootstrap'

const MovieCard = ({ movie }) => {

    return (
        <Col md={3}>
            <Card style={{ height: '25rem' }} >
                <Card.Img style={{ height: '18rem' }} variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title className="h6">{movie.Title}</Card.Title>
                    <Button className="btn btn-secondary mb-1 ">Read More</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}


export default MovieCard