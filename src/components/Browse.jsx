import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  // use selector hook for reading gpt page toggle value from the store
  const showGptSearchPage = useSelector((store) => store?.gpt?.showGptSearchPage)
  // we have to only call the custom hook for fetching movie lists from TMDB API and add it to the store
  useNowPlayingMovies();
  // custom hook for showing popular movies onto the browse page
  usePopularMovies();
  // custom hook for showing top rated movies onto the browse page
  useTopRatedMovies();
  // custom hook for showing upcoming movies onto the browse page
  useUpcomingMovies();

  return (
    <div className="">
        <Header />
        {
        /* if gpt search flag value is true then show the gptSearchPage component, otherwise show the main and secondary containers  */
        showGptSearchPage ? (
         <GptSearchPage />
      ) : (
        <>
            <MainContainer />
            <SecondaryContainer />
        </>
        )
}
    </div>
  )
}

export default Browse






  /*
  Planning for building the browse page : ( -
      - MainContainer
          - Video Background (movie trailer)
          - Video Title (take the data from first movie from the list of 20 movies fetched from TMDB API's)

       - SecondaryContainer
           - MoviesLists * n (list of movies into 'n' rows)
                 - cards * n (movie cards into 'n' columns, scrolled horizontally)
  */