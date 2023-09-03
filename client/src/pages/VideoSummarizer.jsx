import {useNavigation, useActionData, Form} from "react-router-dom";
import axios from "axios";

export async function action({request}) {
  const formData = await request.formData();
  const res = await axios.post("http://127.0.0.1:8000/api/video-summary/", formData);
  console.log(typeof res.data);
  return res.data;
}
export default function VideoSummarizer() {
  const actionData = useActionData();
  const navigation = useNavigation();
  
  return !actionData ? (
    <div className="glass-container2">
          <Form method="post" encType="multipart/form-data" className="form">
            <input
              type="text"
              name="video-link"
              required
            />
            <button disabled={navigation.state === "submitting"} type="submit" className="submit-button2">
              {
                navigation.state === "submitting"
                  ? "Processing..."
                  : "Submit"
              }
            </button>
          </Form>
    </div>
  ) : (
    <div className="container">
      {actionData.summary}
    </div>
  );
}