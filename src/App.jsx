import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
