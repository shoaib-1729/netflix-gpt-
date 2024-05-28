import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies  = () => {
    const dispatch = useDispatch();
  // fetch movies and add it to the store

  // we have to fetch movies only once, hence we have to call this function inside useEffect with empty dependency array.
  useEffect(() => {
     topRatedMovies();
  }, [])

  // function for fetching movies list using TMDB API
  const topRatedMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS)
      const json = await data.json()
      // movies lists
      //  console.log(json.results);
      //  add movies to the redux store
      dispatch(addTopRatedMovies(json.results));
  }
}

export default useTopRatedMovies;