import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from './Header';
import MainContainer from "./MainContainer";


const Browse = () => {
  // we have to only call the custom hook for fetching movie lists from TMDB API and add it to the store
  useNowPlayingMovies();

  return (
    <div className="">
        <Header />
        <MainContainer />




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