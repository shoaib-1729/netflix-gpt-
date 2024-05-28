import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  // Use selector hook to get trailer video key from the Redux store
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  // This custom hook will fetch movie trailer and add the trailer data to the movie store
  useMovieTrailer(movieId);

  return (
    <div className="relative">
      {trailerVideo?.key && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
    )
}

export default VideoBackground;