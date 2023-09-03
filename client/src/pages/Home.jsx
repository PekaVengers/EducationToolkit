import {Link} from "react-router-dom";
import kids from "../assets/images/kids.png";

export default function Home() {
  return (
      <div className="homeContainer w-[100vw] flex-1 bg-secondary flex  items-center justify-around p-[3rem]">
        <div className="left w-[45%] h-[65vh]">
          <h1 className="text-[5.5rem]">Hello, Aspirant!</h1>
          <h2 className="text-tertiary text-[3.5rem] w-[80%]">
            We are here to assist you in your academics.
          </h2>
          <h3 className="text-[2.5rem]">Explore our services:</h3>
          <div className="services h-[41%]  flex flex-wrap justify-between items-center">
            <Link to="/pdfsummary">
            <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] relative">
              <div className="circle absolute left-4  w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <span className="ml-[5rem] text-white text-[2rem]">Pdf Summarizer</span>
            </button>
            </Link>
           <Link to="/video-summary">
           <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] relative">
              <div className="circle absolute left-4 w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <span className="ml-[3rem] text-white text-[2rem]">Video Summarizer</span>
            </button>
           </Link>
            <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[42%] relative">
              <div className="circle absolute left-4 w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <span className="ml-[1rem] text-white text-[2rem]">Peer Review</span>
            </button>
            <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[42%] relative">
              <div className="circle absolute left-4 w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <span className="ml-[1rem] text-white text-[2rem]">Not decided</span>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={kids} alt="kids image" />
        </div>
      </div>
  );
}
