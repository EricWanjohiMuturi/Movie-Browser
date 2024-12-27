import Hero from "./Hero";
import { useParams } from "react-router-dom";


const MovieView = () => {
    const {id} = useParams()

    return (
        <Hero text="Movie Details" />
    )
}

export default MovieView