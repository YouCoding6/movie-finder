import { Alert, Container } from 'react-bootstrap'

const AlertNotFoundMovies = () => {
    return (
        <Container className="d-flex justify-content-center m-5">
            <Alert variant="danger" className="px-4">
                No result found, try another keyword !
            </Alert>
        </Container>
    )
}

export default AlertNotFoundMovies