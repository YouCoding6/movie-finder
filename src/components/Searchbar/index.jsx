import { Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';


const Searchbar = () => {

    const [input, setInput] = useState()

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const fetchMovies = async () => {

        const url = `https://www.omdbapi.com/?s=${input}&apikey=97fa441e`
        const response = await fetch(url)
        const data = await response.json()
        console.log('data', data)

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