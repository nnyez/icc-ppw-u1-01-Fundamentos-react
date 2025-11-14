import { createContext, useContext } from "react";
import type { ProyectosContextType } from "./types/ProyectosContextType";

export const ProyectosContext = createContext<ProyectosContextType | null>(null);

export function useProyectosService() {
    const context = useContext(ProyectosContext);
    if (!context)
        throw new Error("VACIO");
    return context;
}
