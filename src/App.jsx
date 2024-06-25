// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Form from "./components/form/form";
import DetailPage from "./pages/detailPage";
import Cars from "./components/filter/filter";
import FavoritePage from "./pages/favoritePage";
import Authorization from "./pages/authorization";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/detail/:id", element: <DetailPage /> },
  { path: "/cars", element: <Cars /> },
  { path: "/form", element: <Form /> },
  { path: "/favorite", element: <FavoritePage /> },
  { path: "/authorization", element: <Authorization /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
