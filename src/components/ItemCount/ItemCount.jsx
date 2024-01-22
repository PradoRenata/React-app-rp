const ItemCount = ({quantity, stock, setQuantity})=> {

    const increment = () => {
        quantity < stock && setQuantity(quantity + 1);
    }

    const decrement = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    return(
        <div className="flex flex-col gap-4">
            <p className="text-sm">Cantidad :</p>
            <div className="flex items-center">
                <button onClick={decrement} className="text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-2">-</button>
                <h4 className="px-2">{quantity}</h4>
                <button onClick={increment} className="text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-2">+</button>
            </div>
        </div>
    )
}

export default ItemCount;