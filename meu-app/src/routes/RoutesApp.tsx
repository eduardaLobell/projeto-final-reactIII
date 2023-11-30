import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Personagem from "../pages/Personagem"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    //errorElement: <NotFound />,
  },
  {
    path: "/personagem/:id",
    element: <Personagem />
  }
])

function RoutesApp() {
  return <RouterProvider router={router} />
}

export default RoutesApp
