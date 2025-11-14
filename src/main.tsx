import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 

import { RouterProvider } from "react-router";

import { router } from "./lib/types/routes.ts";
import { ProyectosService } from "./lib/proyectosService.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProyectosService>
      <RouterProvider router={router}></RouterProvider>
    </ProyectosService>
  </StrictMode>
);
