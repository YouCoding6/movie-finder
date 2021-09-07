import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';


const Searchbar = ({ setInput, fetchMovies }) => {

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleInput} />
            <Button variant="outline-success" onClick={fetchMovies}>Search</Button>
        </Form>
    )
}


export default Searchbar