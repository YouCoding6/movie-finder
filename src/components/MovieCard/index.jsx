import { Card, Button, Col } from 'react-bootstrap'
import { useEffect } from 'react'
// import { useState, useEffect } from 'react'

const MovieCard = ({ movie, handleShow, setMovieInfo }) => {

    const idMovie = movie.imdbID

    useEffect(() => {
        const readMore = async (idMovie) => {
            const url = `http://www.omdbapi.com/?i=${idMovie}&apikey=97fa441e`
            const response = await fetch(url)
            const data = await response.json()
            setMovieInfo(data)
        }
    }, [])


    return (

        <Col md={3}>
            <Card style={{ height: '25rem' }} >
                <Card.Img style={{ height: '18rem' }} variant="top" src={movie.Poster} />
                <Card.Body>
                    <Card.Title className="h6">{movie.Title}</Card.Title>
                    <Button className="btn btn-secondary mb-1 read-more " onClick={handleShow}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default MovieCard