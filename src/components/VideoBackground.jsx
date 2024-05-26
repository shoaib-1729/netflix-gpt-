import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  // use selector hook
   const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  // this custom hook will fetch movie trailer and add the trailer data to the movie store
  useMovieTrailer();
  return (
    <div className="relative">
      <iframe
      className="w-screen aspect-video "
      // get / select trailer key from the movie store
      src={`https://www.youtube.com/embed/lV1OOlGwExM?si=${trailerVideo?.key}&autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground