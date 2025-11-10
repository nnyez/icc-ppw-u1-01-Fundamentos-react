import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  let cont: number = 0;

  const contar = (value: number) => {
    cont += value;
    setCount(count + value);
  };
  const restore = (value: number) => {
    cont = value;
    setCount(value);
  };

  return (
    <>
      <h1>Home</h1>
      <h2>Fundamentos</h2>
      <p>homePage Works!</p>
      <p>Contador:{cont} </p>
      <p>Contador:{count} </p>
      <button onClick={() => contar(1)}>Contar</button>
      <button onClick={() => contar(-1)}>Restar</button>
      <button onClick={() => restore(0)}>Reiniciar</button>
    </>
  );
}

export default App;
