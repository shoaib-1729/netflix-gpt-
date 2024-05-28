import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
    console.log(movies);
  return  (
    <div className="px-6 bg-black text-white">
            <h1 className="text-3xl font-bold py-4">{title}</h1>
           <div className="flex overflow-y-hidden overflow-x-scroll pb-20 -mb-20">
                <div className="flex p-4 m-2">
                  {
                        movies?.map((movie) => (
                              <MovieCard key={movie?.id} posterPath={movie.poster_path}/>
                          ))
                    }
                </div>
        </div>
    </div>
  )
}

export default MovieList