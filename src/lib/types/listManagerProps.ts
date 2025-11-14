import type proyectoInt from "./proyecto";

export interface ListManagerProps {
    addValue : (i:proyectoInt)=>void,
    removeValue:()=>void;
}

export interface ListDisplay{
    proyects: proyectoInt[];
}