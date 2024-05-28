import {IMG_CDN} from "../utils/constants.js"
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4 cursor-pointer hover:scale-125 hover:transition hover:duration-500  ">
        {/* image */}
        <img className="rounded-lg" src={IMG_CDN + posterPath} alt="Movie Card" />


    </div>
  )
}

export default MovieCard