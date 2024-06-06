import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import StockPage from "./components/StockPage/StockPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import LogIn from "./components/LogIn.jsx";

const router = createBrowserRouter([
  { path: "/stocks", element: <StockPage /> },
  { path: "/login", element: <LogIn /> },
  { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> 
);
