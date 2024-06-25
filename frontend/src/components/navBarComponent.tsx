import { NavLink } from "react-router-dom";

export default function NavBarComponent() {
    return(
        <div className="flex flex-col gap-3 text-[2rem] px-12 py-6">
                <NavLink className={({isActive})=>{
                        return isActive ? 'text-blue-500' : ' text-white';
                    }} to='/user'>User</NavLink>

                <NavLink className={({isActive})=>{
                        return isActive ? 'text-blue-500' : 'text-white';
                    }} to='/admin'>Admin</NavLink>
                <NavLink className={({isActive})=>{
                        return isActive ? 'text-blue-500' : 'text-white';
                    }} to='/'>Teste</NavLink>
                
        </div>
    )
}