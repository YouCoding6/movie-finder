
import { Navbar, Nav, Container } from 'react-bootstrap';
import Searchbar from 'components/Searchbar';

const BootstrapNavbar = ({ setInput, fetchMovies }) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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