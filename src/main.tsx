import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createHashRouter, RouterProvider } from "react-router";

import MainLayout from "./layout.tsx";
import Proyectos from "./proyectos/Proyectos.tsx";
import App from "./App.tsx";
import Perfil from "./perfil/Perfil.tsx";

const router = createHashRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/perfil",
        Component:Perfil,
      },
      {
        path: "/trabajos",
        Component: Proyectos
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
