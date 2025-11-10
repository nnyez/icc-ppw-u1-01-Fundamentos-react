import { useState } from "react";
import type proyectoInt from "../lib/proyecto";

export default function Proyectos() {
  const proyectosList: proyectoInt[] = [
    {
      id: 1,
      title: "Gestor de Tareas",
      description:
        "Aplicación para gestionar tareas con etiquetas y fechas de vencimiento",
    },
    {
      id: 2,
      title: "Blog Personal",
      description: "Plataforma de blogging con edición de posts y comentarios",
    },
    {
      id: 3,
      title: "Tienda Online",
      description: "E-commerce sencillo con carrito y proceso de pago simulado",
    },
    {
      id: 4,
      title: "Chat en Tiempo Real",
      description:
        "Aplicación de chat usando WebSockets para mensajería instantánea",
    },
    {
      id: 5,
      title: "Dashboard Analítico",
      description: "Panel para visualizar métricas y gráficos interactivos",
    },
  ];
  const [proyecto, setProyecto] = useState(proyectosList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addValue = () => {
    const pr: proyectoInt = {
      id: proyecto.length + 1,
      description: description,
      title: title,
    };
    setProyecto([...proyecto, pr]);
    setTitle("");
    setDescription("");
  };
  return (
    <div>
      <h1>Proyectos</h1>
      <h2>Agregar Proyecto</h2>
      <h3>Proyecto a agregar {title}</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => addValue()}>Agregar</button>
      </div>

      <div>
        <ul>
          {proyecto.map((p) => (
            <li>
              {p.id} | {p.title} | {p.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
