export const Card = () => {

    return (
       <div className="m-4 max-w-sm p-6 rounded-lg shadow bg-gradient-to-r from-gray-700 to-gray-900 hover:from-blue-500 hover:to-cyan-500">
                <img src="../../../public/dino.svg" className="text-gray-500" alt=""/>
            <div className="pt-2">
                <h5 className="mb-2 text-2xl font-medium text-gray-300">Dino producto disponible</h5>
                <p className="mb-3 font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
       </div>
    )
}