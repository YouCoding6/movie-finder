import MovieCard from 'components/MovieCard'


const IndexMovies = ({ movies }) => {
    movies && console.log('movies', movies)
    console.log('movies', movies)
    return (
        <div>
            {movies && movies.map(movie =>
                <MovieCard movie={movie} />)}
        </div>
    )
}


export default IndexMovies