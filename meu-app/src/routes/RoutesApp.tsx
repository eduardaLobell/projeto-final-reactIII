import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Personagem from "../pages/Personagem"
import Pokedex from "../pages/Pokedex"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    //errorElement: <NotFound />,
  },
  {
    path: "/personagem/:id",
    element: <Personagem />
  },
  {
    path: "/pokedex",
    element: <Pokedex />
  }
])

function RoutesApp() {
  return <RouterProvider router={router} />
}

export default RoutesApp
