import ItemCount from "../ItemCount/ItemCount";
import { ChevronLeft } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";

const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)
    const { addToCart , isInCart } = useContext(CartContext)

    const handleAdd = () => {
      const itemToCart = {
        ...item,
        quantity,
      }

      addToCart(itemToCart)
    }

    const handleBack = () => {
      navigate(-1)
    }

    return (

      <div className="container mx-auto">
        <div className="flex flex-row gap-2 justify-start mt-4">
          <button className="flex gap-2 items-center text-slate-700" onClick={handleBack}><ChevronLeft color='#1F2937' size="20" />Volver</button>
          <span className='px-4 text-slate-400'>|</span>
          <p className="text-blue-500">Producto de {item.category}</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-white my-4 p-6 rounded place-items-start">
          <img className="w-full object-cover" src={item.img} alt={item.name} />
          <div className="flex flex-col justify-between h-full border border-slate-200 rounded py-4 px-8 text-start">
            <div className="flex flex-col gap-4">
              <p className="text-sm">Disponibles : {item.stock}</p>
              <h3 className="text-xl text-slate-950 font-semibold">{item.name}</h3>
              <p className="text-slate-800 text-sm font-light">{item.description}</p>
              <p className="text-xl text-slate-800">${item.price}</p>
            </div>
            {
              isInCart( item.id )
              ? <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-md text-base px-5 py-3 text-center"><Link to="/cart">Terminar mi compra</Link></button>

              : <div className="flex flex-col gap-4">
              <ItemCount quantity={quantity} stock={item.stock} setQuantity={ setQuantity}/>
              <button onClick={handleAdd} disabled={item.stock === 0} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-md text-base px-5 py-3 text-center" >Agregar al carro</button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  