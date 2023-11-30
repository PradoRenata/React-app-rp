import { Button } from './Button'

export const NavBar = () => {

    return (
        <header className="bg-slate-900/90 backdrop-blur drop-shadow-2xl"> 
            <div className="flex justify-between items-center px-6 py-2">
                <a href="#" className="text-lg text-white font-bold">DinoShop</a>
                <nav className="nav__container">
                    <ul className="flex flex-row">
                        <li className="text-white text-lg px-6 py-2 hover:text-blue-400"><a href="#"> Productos</a></li>
                        <li className="text-white text-lg px-6 py-2 hover:text-blue-400"><a href="#"> Categorias</a></li>
                        <li className="text-white text-lg px-6 py-2 hover:text-blue-400"><a href="#">Compras</a></li>
                    </ul>
                </nav>
                <Button/>
            </div>
        </header>
    )
}