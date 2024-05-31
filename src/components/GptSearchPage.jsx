import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from './../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
          {/* background image */}
          <div className="relative -z-10">
                <img className="absolute"
                  src={BG_URL}
                  alt="background-img"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage