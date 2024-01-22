import { Link } from "react-router-dom";
import Dino from "../../assets/dino.svg"

const EmptyCart = () => {
    return (
        <section className="flex flex-col mt-8 mx-40 mb-60 gap-4 p-8 bg-white items-center">
            <img src= { Dino } alt="Notfound" className="w-20" />
            <p className="text-slate-400">Tu carro está vacío</p>
            <button className="text-blue-500"><Link to={"/"}>Volver</Link></button>
        </section>
    )
}

export default EmptyCart
