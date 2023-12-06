import Cartwidget from '../Cartwidget/Cartwidget'
import NavLink from './NavLink'

export const NavBar = () => {

    return (
        <header className="m-2 bg-slate-900/90 backdrop-blur drop-shadow-2xl rounded-lg"> 
            <div className="flex justify-between items-center px-6 py-2">
                <a href="#" className="text-lg font-bold text-white font-bold">DinoShop</a>
                <nav className="flex flex-row">
                    <NavLink href={"#"} text={"Productos"}/>
                    <NavLink href={"#"} text={"Categorias"}/>
                    <NavLink href={"#"} text={"Compras"}/>
                </nav>
                <Cartwidget />
            </div>
        </header>
    )
}

