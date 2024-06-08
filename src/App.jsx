// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import DetailPage from "./components/detailPage/detailPage";
import Cars from "./components/cars/cars";
import Form from "./components/form/form";
import Login from "./components/login/login";

const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/detail/:id", element: <DetailPage /> },
    { path: "/cars", element: <Cars /> },
    { path: "/form", element: <Form /> },
    { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
