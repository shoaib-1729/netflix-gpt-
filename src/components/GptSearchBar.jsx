import { useSelector } from "react-redux"
import {langConst} from "../utils/languageConstants"
// component for gpt search bar (form)
const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.lang)
  return (
    <div className="p-[20%]">
       <form className="w-full bg-black grid grid-cols-12" >
           {/* input */}
           <input
           type="text"
           className="p-4 m-4 col-span-9"
           placeholder={langConst[langKey]?.gptSearchPlaceholder}
          />
           {/* search button */}
           <button
           className="col-span-3 m-4 py-2 text-white rounded-lg bg-red-500"
           >
            {langConst[langKey]?.search}
            </button>
       </form>
    </div>
  )
}

export default GptSearchBar