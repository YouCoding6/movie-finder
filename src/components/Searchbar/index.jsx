import { Form, FormControl, Button } from 'react-bootstrap';

const Searchbar = ({ setInput, fetchMovies }) => {

    const handleInput = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Enter a title"
                className="mr-2"
                aria-label="Search"
                onChange={handleInput}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} />
            <Button variant="outline-secondary" onClick={fetchMovies} className="ms-2">Search</Button>
        </Form>
    )
}


export default Searchbar