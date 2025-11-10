import { NavLink } from "react-router";
import './Navbar.css'; // Adjust the path as necessary

export default function Navbar() {
  return (
    <nav>
      <NavLink className={({ isActive }) => isActive ? 'navlin active' : 'navlin'} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'navlin active' : 'navlin'} to={"/perfil"}>Perfil</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'navlin active' : 'navlin'} to={"/trabajos"}>Trabajos</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'navlin active' : 'navlin'} to={"/proyectos"}>Proyectos</NavLink>
    </nav>
  );
}
