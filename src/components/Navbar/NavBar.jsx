import Cartwidget from '../Cartwidget/Cartwidget'
import { Link } from "react-router-dom";
import Isotype from '../../assets/isotype.svg'
import { Sun } from 'react-feather';


const links = [
    {
      label: "Ver todo",
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
        <header className="bg-white sticky top-0 z-50"> 
            <div className="flex justify-between px-12 py-3">
              <div className="flex gap-2">
                <img src={ Isotype } alt="DinoTienda"/>
                <a href="/" className="font-['Titan_One'] text-xl text-slate-900 leading-5 pt-2">Dino<br/>Tienda</a>
              </div>
              <div className='flex gap-2'>
                 <button className='px-5 py-2 bg-slate-100 rounded-lg'><Sun color='#1F2937' size="20" /></button>
                 <Cartwidget />
                 <button className='px-5 py-2 border border-slate-200 rounded-lg text-slate-900 font-medium hover:text-blue-600'>Iniciar sesión</button>
              </div>
            </div>
            <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-center">
                    {links.map((link) => (
                        <Link key={link.href} to={link.href} className="text-white text- px-5 pb-3 pt-4 border-b-4 border-transparent hover:border-b-4 hover:border-white"> {link.label} </Link>
                    ))}
                </nav>
        </header>
    )
}

export default NavBar;