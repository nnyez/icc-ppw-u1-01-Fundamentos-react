import { Outlet } from "react-router";
import Navbar from "./ui/navbar/Navbar";

export default function MainLayout (){
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}