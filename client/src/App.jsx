import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PDFSummarizer, {action as pdfSummaryAction} from "./pages/PDFSummarizer";
import VideoSummarizer, {action as videoSummaryAction} from "./pages/VideoSummarizer";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route action={pdfSummaryAction} path="pdfsummary" element={<PDFSummarizer />} />
    <Route action={videoSummaryAction} path="video-summary" element={<VideoSummarizer />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}