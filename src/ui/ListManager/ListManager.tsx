import { useState } from "react";
import type { ListManagerProps } from "../../lib/types/listManagerProps";
import type proyectoInt from "../../lib/types/proyecto";

export default function ListManager({
  addValue,
  removeValue,
}: ListManagerProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddValue = () => {
    if(!title||!description)
      return;
    const newPro: proyectoInt = {
      description: description,
      title: title,
      id: 0,
    };
    addValue(newPro);
    setTitle("");
    setDescription("");
  };

  const handleRemoveValue = () => {
    removeValue();
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
        <button onClick={() => handleAddValue()}>Agregar</button>
        <button onClick={() => handleRemoveValue()}>Remover</button>
      </div>
    </div>
  );
}
