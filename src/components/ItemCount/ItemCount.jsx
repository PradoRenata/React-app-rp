import { useState } from "react";

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="flex justify-between px-6 py-4">
            <div className="flex items-center">
                <button className="text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-2" onClick={decrement}>-</button>
                <h4 className="px-2">{quantity}</h4>
                <button className="text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-2" onClick={increment}>+</button>
            </div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carro</button>
        </div>
    )
}

export default ItemCount;