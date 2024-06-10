import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./routes/HomePage";
import About from "./routes/About";
import Contact from "./routes/Contact";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/Error";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
