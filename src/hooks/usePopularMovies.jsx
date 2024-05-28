import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies  = () => {
    const dispatch = useDispatch();
  // fetch movies and add it to the store

  // we have to fetch movies only once, hence we have to call this function inside useEffect with empty dependency array.
  useEffect(() => {
    usePopularMovies();
  }, [])

  // function for fetching movies list using TMDB API
  const usePopularMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS)
      const json = await data.json()
      // movies lists
      //  console.log(json.results);
      //  add movies to the redux store
      dispatch(addPopularMovies(json.results));
  }
}

export default usePopularMovies;