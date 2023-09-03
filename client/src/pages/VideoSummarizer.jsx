import { useNavigation, useActionData, Form } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";

export async function action({ request }) {
  const formData = await request.formData();
  const res = await axios.post("http://127.0.0.1:8000/api/video-summary/", formData);
  console.log(typeof res.data);
  return res.data;
}
export default function VideoSummarizer() {
  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <div className="videoContainer flex flex-1 bg-secondary">
      <Sidebar />
      <div className="right w-[75vw] flex flex-col justify-center items-center ">
        {actionData ? (
          <>
            <h1 className="text-[5rem]">Summary</h1>
            <div className="rightContent w-[70%] h-[70%]  bg-[#88C7E7] px-[4rem] py-[3rem] flex flex-col items-center justify-center  rounded-[2rem]">
              <div className="content text-white bg-primary px-[3rem] py-[2rem] text-[2rem] rounded-[2rem]  overflow-y-auto">
                {actionData.summary}
              </div>
            </div>
          </>
        ) : (
          <div className="rightContent w-[70%] bg-[#88C7E7] px-[4rem] py-[3rem] flex flex-col  rounded-[2rem]">
            <h1 className="text-[5rem]">Video Summariser</h1>
            <h2 className="text-tertiary text-[3rem] mb-8">
              Paste the URL of any youtube video and get it summarised.
            </h2>
            <Form method="post" encType="multipart/form-data" className="form">
              <input
                type="text"
                name="video-link"
                required
                className="placeholder:text-white-700 p-2 pl-8  bg-primary w-[100%] text-[2rem]  border-none rounded-[1rem] mb-8"
              />
              <button
                disabled={navigation.state === "submitting"}
                type="submit"
                className="text-primary p-2 pl-8 hover:bg-primary hover:text-white  bg-white text-[2rem]  border-none rounded-[1rem]"
              >
                {
                  navigation.state === "submitting"
                    ? "Processing..."
                    : "Submit"
                }
              </button>
            </Form>
          </div>
        )}
      </div>
    </div>
  )
}