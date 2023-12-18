import Cartwidget from '../Cartwidget/Cartwidget'
import { Link } from "react-router-dom";

const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Oficina",
      href: "/productos/oficina",
    },
    {
      label: "Decoración",
      href: "/productos/decoracion",
    },
    {
      label: "Tecnología",
      href: "/productos/tecnologia",
    },
  ];

const NavBar = () => {

    return (
        <header className="m-2 bg-slate-900/90 backdrop-blur drop-shadow-2xl rounded-lg sticky top-1 z-50"> 
            <div className="flex justify-between items-center px-6 py-2">
                <a href="/" className="text-lg font-bold text-white font-bold">DinoShop</a>
                <nav className="flex flex-row">
                    {links.map((link) => (
                
                        <Link key={link.href} to={link.href} className="text-white text-lg px-6 py-2 hover:text-blue-400"> {link.label} </Link>
                    ))}
                </nav>
                <Cartwidget />
            </div>
        </header>
    )
}

export default NavBar;