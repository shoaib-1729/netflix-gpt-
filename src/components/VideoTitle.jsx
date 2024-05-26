import { CgPlayButton } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-screen aspect-video z-[20] bg-gradient-to-r from-black text-white pt-[20%] px-24">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-16 text-lg w-1/4">{overview}</p>
      <div className="flex">
           {/* 2 buttons */}
           <button className="flex w-[12rem] justify-center items-center bg-white p-2 px-12 text-xl text-black rounded-lg mx-3 hover:bg-opacity-80 ">
                  {/* play icon */}
                  <CgPlayButton size="40px"/>
                  {/* text */}
                  <p className="-ml-[3px] mx-auto">Play</p>
           </button>
           <button className="flex gap-[7px] w-[13rem] justify-center items-center bg-gray-500 p-2 px-12 text-xl text-white bg-opacity-50 rounded-lg mx-3" >
                  {/* info icon */}
                  <IoIosInformationCircleOutline />
                  {/* text */}
                  <p className="-ml-[3px] mx-auto">More Info</p>
           </button>
      </div>
    </div>
  )
}

export default VideoTitle