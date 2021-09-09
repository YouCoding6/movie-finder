import { Modal, Button } from 'react-bootstrap'

const ModalMovieInfo = ({ handleClose, show }) => {

    return (
        <Modal show={show}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
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