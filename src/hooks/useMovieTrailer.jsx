import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
// dispatch hook
const dispatch = useDispatch();
// calling TMDB api for fetching all the video related to the particular movie ID
const getmovieTrailer = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
  const json = await data.json();
//  console.log(json);
//  filter trailer out of movie video list
const filteredData = json.results.filter((video) => (video?.type === "Trailer" && video?.name === "Official Trailer"))
console.log(filteredData);

// handling edge cases of no trailers, 1 trailer, multiple trailers
const trailer = filteredData ? filteredData[0] : json?.results[0]
console.log(trailer)

// dispatch / sent the trailer data to the store (dispatch)
dispatch(addTrailerVideo(trailer))
}
// call the function inside use effect wih [] as a dependency
useEffect(() => {
  getmovieTrailer()
}, [])
}

export default useMovieTrailer