import Hero from "./Hero"

interface SearchViewProps {
    keyword: string;
    searchResults: { original_title: string; poster_path: string }[];
}

interface Movie {
    original_title: string;
    poster_path: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="col-lg-3">
            <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-primary">show Details</a>
            </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults }: SearchViewProps) => {
    const title = `You are searching for ${keyword}`
     const resultsHtml = searchResults.map((obj,i) => {
        return (
            <MovieCard key={i} movie={obj} />
        )
     })
    
    return (
        <div>
            <Hero text={title} />
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
        </div>
    )
}

export default SearchView