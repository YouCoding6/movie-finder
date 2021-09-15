import { Modal, Button, Card, Row, Col } from 'react-bootstrap'
// import 'index' from 'ModalMovieInfo/index.css'

const ModalMovieInfo = ({ handleClose, show, movieInfo }) => {
    return (

        <Modal show={show}>
            <Row>
                <Col md={6}>
                    {movieInfo && <Card.Img variant="top" src={`${movieInfo.Poster}`} />}
                </Col>
                <Col md={6} class="">
                    {movieInfo && <h4 class="mt-3">{movieInfo.Title}</h4>}
                    {movieInfo && <p class="text-justify pe-2">{movieInfo.Plot}</p>}
                    <Button variant="secondary" class="" onClick={handleClose}>Close</Button>
                </Col>
            </Row>
        </Modal>
    )
}

export default ModalMovieInfo