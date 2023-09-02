import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PDFSummarizer, {action as pdfsummaryAction} from "./pages/PDFSummarizer";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route action={pdfsummaryAction} path="/pdfsummary" element={<PDFSummarizer />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}