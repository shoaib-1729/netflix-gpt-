import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    // get movie data from the store
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    // error case : if movie data is not fetched from the tmdb api, the store will not be updated
    // return if movie is null (early return)
    if(!movies) return;
    // console.log("Movies: ",movies)

    // get only one movie from the movie list (first movie)
    const mainMovie = movies[0]
    const {original_title, overview, id} = mainMovie

    // console.log(mainMovie)
    return (
    <div>
        {/* overlap hoge dono */}
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
    )
}

export default MainContainer