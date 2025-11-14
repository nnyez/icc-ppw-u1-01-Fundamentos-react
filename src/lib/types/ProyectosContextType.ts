import type proyectoInt from "./proyecto";

export interface ProyectosContextType {
    addValue: (i: proyectoInt) => void;
    removeValue: () => void;
    proyectos: proyectoInt[];
}
