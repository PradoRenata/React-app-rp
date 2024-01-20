import Dino from "../../assets/dino.svg"

const NotFound = () => {

    return (
        <div className="flex flex-col w-1/2 h-screen mx-auto items-center pt-24">
            <img src= { Dino } alt="Notfound" className="w-32" />
            <h2 className="font-['Titan_One'] text-8xl text-slate-900">404</h2>
            <p>Página no encontrada</p>
        </div>
    )
}

export default NotFound