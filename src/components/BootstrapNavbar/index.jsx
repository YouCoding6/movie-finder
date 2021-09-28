
import { Navbar, Nav, Container } from 'react-bootstrap';
import Searchbar from 'components/Searchbar';
import { LinkContainer } from 'react-router-bootstrap'

const BootstrapNavbar = ({ setInput, fetchMovies }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>Movie Finder</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Searchbar setInput={setInput} fetchMovies={fetchMovies} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BootstrapNavbar