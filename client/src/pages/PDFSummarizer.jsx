import axios from "axios";
import { useState } from "react";
import { useNavigation, useActionData, Form } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export async function action({ request }) {
  const formData = await request.formData();
  const fileName = formData.get("source-file").name;
  const res = await axios.post(
    "http://127.0.0.1:8000/api/pdf-summary/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(typeof res.data);
  return { img: res.data, name: fileName };
}

export default function PDFSummarizer() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  async function askQuestion() {
    const res = await axios.post("http://127.0.0.1:8000/api/ask-question/", {
      question,
    });
    setQuestion("");
    setChatHistory(res.data.history);
    console.log(res.data.history);
  }

  function handleChange(event) {
    setQuestion(event.target.value);
  }

  return (
    <div className="videoContainer flex flex-1 bg-secondary">
      <Sidebar />
      <div className="right w-[75vw] flex flex-col justify-center items-center ">
        {!actionData ? (
          <div className="container  w-[80%] flex flex-col ">
            <form className="flex  w-[100%] mb-[4rem]">
              <input
                className="text-[2rem]  py-2 px-3 bg-[#0C2735] text-white placeholder:text-white w-[80%]"
                placeholder="Ask your query..."
                type="text"
                value={question}
                onChange={handleChange}
              />
              <button
                className="text-[2rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 w-[20%]"
                onClick={askQuestion}
                type="button"
              >
                Ask
              </button>
            </form>
            <div className="mb-[1rem] ">
              <span className="text-[2rem] bg-primary rounded px-2 mr-2 text-white">User: </span>
              <span className="text-[2rem]">This is a sample question which I asked from the artificial intelligence Model and now it's going to provide me with some response</span>
            </div>
            <div >
              <span className="text-[2rem] bg-black rounded px-2 mr-2 text-white">Bot: </span>
              <span className="text-[2rem]">This is a sample answer</span>
            </div>
          </div>
        ) : (
          <div className="rightContent w-[70%] bg-[#88C7E7] px-[4rem] py-[3rem] flex flex-col  rounded-[2rem]">
            <h1 className="text-[5rem]">PDF Summariser</h1>
            <h2 className="text-tertiary text-[3rem] mb-8">
              Upload your PDF and get all your queries regarding that PDF
              answered by our AI Model.
            </h2>
            <Form
              method="post"
              encType="multipart/form-data"
              className="form  flex justify-between items-center"
            >
              <div className="selectFile">
                <input
                  type="file"
                  name="source-file"
                  accept="application/pdf"
                  required
                  className="text-[2rem] "
                />
              </div>
              <button
                disabled={navigation.state === "submitting"}
                type="submit"
                className="text-primary px-8 py-2 hover:bg-primary hover:text-white  bg-white text-[2rem]  border-none rounded-[1rem]"
              >
                {navigation.state === "submitting" ? "Processing..." : "Submit"}
              </button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}
