import { createHashRouter } from "react-router";
import App from "../../App";
import MainLayout from "../../MainLayout";
import Perfil from "../../perfil/Perfil";
import Proyectos from "../../proyectos/Proyectos";
import Trabajos from "../../trabajos/Trabajos";

export const router = createHashRouter([
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
        Component: Perfil,
      },
      {
        path: "/trabajos",
        Component: Trabajos,
      },
      {
        path:"/proyectos",
        Component: Proyectos
      }
    ],
  },
]);