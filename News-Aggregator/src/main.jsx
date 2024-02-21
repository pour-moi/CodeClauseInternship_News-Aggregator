import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewsCategory } from "./components/CategoryNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Politics",
    element: <NewsCategory category="Politics" />,
  },
  {
    path: "/sport",
    element: <NewsCategory category="Sport" />,
  },
  {
    path: "/business",
    element: <NewsCategory category="Business" />,
  },
  {
    path: "/entertainment",
    element: <NewsCategory category="Entertainment" />,
  },
  {
    path: "/technology",
    element: <NewsCategory category="Technology" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
