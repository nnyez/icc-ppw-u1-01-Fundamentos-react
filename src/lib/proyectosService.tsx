import { useEffect, useState } from "react";
import type { ChildrenProp } from "./types/childrenProp";
import type proyectoInt from "./types/proyecto";
import { ProyectosContext } from "./useProyectosService";

const STORAGE_KEY = "proyectosApp";

export function ProyectosService({ children }: ChildrenProp) {
  const [proyectos, setProyectos] = useState<proyectoInt[]>(() => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value
      ? JSON.parse(value)
      : [
          {
            id: 1,
            description: "Sistema de gestión de inventario",
            title: "InventoryPro",
          },
          {
            id: 2,
            description: "Aplicación de comercio electrónico",
            title: "EasyShop",
          },
          {
            id: 3,
            description: "Plataforma de aprendizaje en línea",
            title: "LearnHub",
          },
          {
            id: 4,
            description: "Sistema de reservas hoteleras",
            title: "HotelBook",
          },
          {
            id: 5,
            description: "Aplicación de gestión de tareas",
            title: "TaskMaster",
          },
        ];
  });
  const addValue = (p: proyectoInt) => {
    p.id = proyectos.length + 1;
    setProyectos([...proyectos, p]);
  };

  const removeValue = () => {
    const p = proyectos;
    setProyectos(p.slice(1));
  };

  useEffect(() => {
    const value = proyectos;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }, [proyectos, setProyectos]);

  return (
    <ProyectosContext value={{ addValue, proyectos, removeValue }}>
      {children}
    </ProyectosContext>
  );
}
