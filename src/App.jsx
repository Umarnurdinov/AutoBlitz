import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import { Sale } from "./components/detail/detail";
import { CarsPage } from "./pages/cars";

const routes = createBrowserRouter([{ path: "/", element: <Home /> },{
  path:"/cars",
  element:<CarsPage/>
}]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
