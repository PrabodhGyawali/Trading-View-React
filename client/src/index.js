import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StockPage from "./components/StockPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  { path: "/stocks", element: <StockPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> 
);
