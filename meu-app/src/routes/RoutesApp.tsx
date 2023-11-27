import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>
    //errorElement: <NotFound />,
  },
  {
    path: "/personagem",
    element: <h1>Personagem</h1>
  }
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
