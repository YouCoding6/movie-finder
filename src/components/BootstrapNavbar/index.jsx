
import { Navbar, Nav, Container } from 'react-bootstrap';
import Searchbar from 'components/Searchbar';

const BootstrapNavbar = ({ setInput, fetchMovies }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Movie Finder</Navbar.Brand>
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