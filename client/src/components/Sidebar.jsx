import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="left bg-[#88C7E7] flex flex-col justify-evenly items-center  w-[25vw]">
      <Link to={"/pdfsummary"}>
        <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[20vw] relative">
          <div className="circle absolute left-4  w-[40px] h-[40px] rounded-[50%] bg-white"></div>
          <span className="ml-[1rem] text-white text-[2rem]">
            Pdf summariser
          </span>
        </button>
      </Link>
      <Link to={"/video-summary"}>
        <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[20vw] relative">
          <div className="circle absolute left-4  w-[40px] h-[40px] rounded-[50%] bg-white"></div>
          <span className="ml-[1rem] text-white text-[2rem]">
            Video Summarizer
          </span>
        </button>
      </Link>
      <Link to={"/peer"}>
        <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[20vw] relative">
          <div className="circle absolute left-4 w-[40px] h-[40px] rounded-[50%] bg-white"></div>
          <span className="ml-[1rem] text-white text-[2rem]">
            Peer Review
          </span>
        </button>
      </Link>
      <Link to={"/notdecided"}>
        <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[20vw] relative">
          <div className="circle absolute left-4 w-[40px] h-[40px] rounded-[50%] bg-white"></div>
          <span className="ml-[1rem] text-white text-[2rem]">
            Not decided
          </span>
        </button>
      </Link>
    </div>
  )
}