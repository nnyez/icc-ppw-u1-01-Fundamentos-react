import ListDisplay from "../ui/ListDisplay/ListDisplay";
import ListManager from "../ui/ListManager/ListManager";
import { useProyectosService } from "../lib/useProyectosService";



export default function Trabajos (){
    const {proyectos, addValue, removeValue}= useProyectosService();

    return( 
        <div>
            <ListManager addValue={addValue} removeValue={removeValue}/>
            <ListDisplay proyects={proyectos}/>
        </div>
    );
}