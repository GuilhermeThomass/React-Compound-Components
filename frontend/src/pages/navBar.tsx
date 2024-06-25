import { Outlet } from "react-router-dom"

import NavBarComponent from "../components/navBarComponent";

export default function NavBar() {
    return(
        <div className="flex gap-12">
            <NavBarComponent/>
            <div className="w-full h-screen flex justify-center items-center">
                <Outlet/>
            </div>
        </div>
    )
}