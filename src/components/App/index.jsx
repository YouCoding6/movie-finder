import React, { useState } from 'react'
import BootstrapNavbar from 'components/BootstrapNavbar'
import Home from 'pages/Home'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const App = () => {

    const [input, setInput] = useState()
    const [requestResponse, setRequestResponse] = useState()
    const [choice, setChoice] = useState(true)
    const [searchMovies, setSearchMovies] = useState([])

    const fetchMovies = async () => {
        const url = `https://www.omdbapi.com/?s=${input}&apikey=97fa441e`
        const response = await fetch(url)
        const data = await response.json()
        setSearchMovies(data.Search)
        setChoice(false)
        setRequestResponse(data.Response)
    }

    return (
        <>
            <Router>
                <BootstrapNavbar setInput={setInput} fetchMovies={fetchMovies} />
                <Switch>
                    <Route>
                        <Home path="/" input={input} choice={choice} requestResponse={requestResponse} searchMovies={searchMovies} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App