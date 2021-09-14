import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

const ModalMovieInfo = ({ handleClose, show, movieInfo }) => {
    return (

        <Modal show={show}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{movieInfo.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default ModalMovieInfo