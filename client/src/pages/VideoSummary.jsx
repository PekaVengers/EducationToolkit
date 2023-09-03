import { Link } from "react-router-dom";
import { useState } from "react";

function VideoSummary() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className="videoContainer flex flex-1 bg-secondary">
        <div className="left bg-[#88C7E7] flex flex-col justify-evenly items-center  w-[25vw]">
          <Link to={"/pdfsummary"}>
            <button className="flex items-center justify-evenly bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] w-[20vw] relative">
              <div className="circle absolute left-4  w-[40px] h-[40px] rounded-[50%] bg-white"></div>
              <span className="ml-[1rem] text-white text-[2rem]">
                Pdf summariser
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
        <div className="right w-[75vw] flex flex-col justify-center items-center ">
          {submitted ? (
            <>
            <h1 className="text-[5rem]">Summary</h1>
            <div className="rightContent w-[70%] h-[70%]  bg-[#88C7E7] px-[4rem] py-[3rem] flex flex-col items-center justify-center  rounded-[2rem]">
              <div className="content text-white bg-primary px-[3rem] py-[2rem] text-[2rem] rounded-[2rem]  overflow-y-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit sodales vulputate. Curabitur pellentesque leo a tincidunt pretium. Fusce mollis consectetur mi porta dapibus. Morbi vitae aliquam turpis, nec dapibus eros. Aenean tincidunt sollicitudin quam, in fringilla nisl elementum in. Pellentesque non blandit velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eu augue rhoncus, mollis massa lobortis, vehicula enim.
              </div>
            </div>
            </>
          ) : (
            <div className="rightContent w-[70%] bg-[#88C7E7] px-[4rem] py-[3rem] flex flex-col  rounded-[2rem]">
              <h1 className="text-[5rem]">Video Summariser</h1>
              <h2 className="text-tertiary text-[3rem] mb-8">
                Paste the URL of any youtube video and get it summarised.
              </h2>
              <input
                type="text"
                placeholder="Paste video URL.."
                className="placeholder:text-white-700 p-2 pl-8  bg-primary w-[100%] text-[2rem]  border-none rounded-[1rem] mb-8"
              />
              <button
                onClick={handleSubmit}
                className="text-primary p-2 pl-8 hover:bg-primary hover:text-white  bg-white text-[2rem]  border-none rounded-[1rem]"
              >
                Summarise
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default VideoSummary;
