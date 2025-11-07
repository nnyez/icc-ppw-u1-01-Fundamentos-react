import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Perfil from "./perfil/Perfil.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Main tsx</h1>
    <RouterProvider router={router} />
  </StrictMode>
);
