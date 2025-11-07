import { useState } from "react";
import "./Perfil.css";
import { NavLink } from "react-router";

function Perfil() {
  const [name, setName] = useState("Geovanni");
  const [lastname, setLastName] = useState("Zuñiga");
  const [age, setAge] = useState(21);

  const restore = () => {
    setName("Geovanni");
    setLastName("Zuñiga");
    setAge(21);
  };
  const change = () => {
    setName("Ana");
    setLastName("Gonzales");
    setAge(25);
  };
  const fullName = () => {
    return `${name} ${lastname} con edad ${age} años`;
  };

  return (
    <div>
      <h1>{name}</h1>

      <dl>
        <td>Nombre:</td>
        <dd>{name}</dd>

        <td>Apellido:</td>
        <dd>{lastname}</dd>

        <td>Edad:</td>
        <dd>{age}</dd>

        <td>Nombre Completo:</td>
        <dd>{fullName()}</dd>

        <td>{fullName().toUpperCase()}</td>
        <dd>{fullName()}</dd>
      </dl>
      <button onClick={() => change()}>Cambiar datos</button>
      <button onClick={() => setAge(18)}>Cambiar Edad</button>
      <button onClick={() => restore}>Reinciar</button>
      <NavLink to={'/'}>Ir a Home</NavLink>
      
    </div>
  );
}

export default Perfil;
