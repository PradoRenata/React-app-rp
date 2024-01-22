import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import ItemCount from "../ItemCount/ItemCount";

const CartView = () => {
    const { cart, totalCart, cleanCart, removeItem } = useContext(CartContext);
    const { user } = useContext(UserContext);

    return (
        <section className="flex flex-row my-8 mx-40 gap-4">
            <div className="bg-white basis-3/4 p-8 rounded">
                <div className="flex justify-between">
                    <h3 className="text-xl text-slate-950 font-semibold">Carro de compra</h3>
                    <p className="text-slate-800 text-sm font-light"> {user.email} </p>
                </div>
                <ul className="my-4">
                    {cart.map((item) => (
                        <li key={item.id} className="flex border border-slate-200 rounded p-4 gap-6 my-2">
                            <img src={item.img} alt="cart img" className="w-24 object-cover" />
                            <div className="flex flex-col w-full gap-2">
                                <p className="text-sm">Disponibles : {item.stock}</p>
                                <h5>{item.name}</h5>
                                <div className="flex flex-row justify-between">
                                    <button onClick={() => removeItem(item.id)} className="text-blue-500">
                                        Eliminar
                                    </button>
                                    <div className="flex flex-row gap-4 items-center">
                                        <p className="text-sm">Cantidad: {item.quantity}</p>
                                        <p className="text-xl text-slate-800">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={cleanCart} className="text-red-500 w-full">
                    Vaciar carro
                </button>
            </div>
            <div className="bg-white basis-1/4 p-4 h-fit rounded">
                <p className="text-slate-800 text-sm font-light pb-6">Resumen de compra</p>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex flex-row justify-between">
                        <p>Productos </p>
                        <p>${totalCart()}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Envío </p>
                        <p className="text-sky-500">Gratis</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                        <p className="font-semibold">Total </p>
                        <p className="font-semibold">${totalCart()}</p>
                    </div>
                    <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-md text-base px-5 py-3 text-center" >Ir al pago</button>
                </div>
            </div>
        </section>
    );
};

export default CartView;
