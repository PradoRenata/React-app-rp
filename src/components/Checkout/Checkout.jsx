import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, setDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { CheckCircle } from "react-feather"


const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext); 

    const [values, setValues] = useState({
        name: '',
        lastname:'',
        direction: '',
        email:'',
    })

    const [orderId , setOrderId] = useState(null);

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            client: values,
            items: cart,
            total: totalCart(),
            date: new Date(),

        }

        const ordersRef = collection( db, "orders");
        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id)
            clearCart()
        })
    }

    if (orderId) {
        return (
            <section className="flex flex-col basis-3/4 px-8 py-12 bg-white rounded mt-8 mx-40 items-center">
                <CheckCircle color='#22C55E' size="32" />
                <h3 className="text-xl text-slate-950 font-semibold pb-4">¡Compra realizada con éxito!</h3>
                <p className="text-slate-800 text-sm font-light">Tu código de compra es:</p>
                <span className="text-blue-500 font-semibold">{orderId}</span>
            </section>
        )
    }

    return (
        <section className="flex lg:flex-row sm:flex-col mt-8 mx-40 gap-4">
            <div className="bg-white basis-3/4 p-4 rounded">
                <h3 className="text-xl text-slate-950 font-semibold ">Datos de la compra</h3>
                <p className="text-slate-800 text-sm font-light pb-6">Ingresa tus datos para realizar la compra</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <input 
                            className="border border-slate-200 focus:outline-none focus-visible:outline-sky-200 p-2 rounded w-full" 
                            type="text" 
                            placeholder="Nombre"
                            value={values.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                        <input 
                            className="border border-slate-200 focus:outline-none focus-visible:outline-sky-200 p-2 rounded w-full" 
                            type="text" 
                            placeholder="Apellido"
                            value={values.lastname}
                            onChange={handleInputChange} 
                            name="lastname"
                        />
                    </div>
                    <input 
                        className="border border-slate-200 focus:outline-none focus-visible:outline-sky-200 p-2 rounded" 
                        type="email" 
                        placeholder="Correo electrónico"
                        value={values.email}
                        onChange={handleInputChange} 
                        name="email"
                    />
                    <input 
                        className="border border-slate-200 focus:outline-none focus-visible:outline-sky-200 p-2 rounded" 
                        type="text" 
                        placeholder="Dirección"
                        value={values.direction}
                        onChange={handleInputChange}
                        name="direction" 
                    />
                    <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-md text-base px-5 py-3 text-center mt-4" >Confirmar compra</button>
                </form>
            </div>
            <div className="bg-white basis-1/4 p-4 h-fit rounded">
                <p className="text-slate-800 text-sm font-light pb-6">Resumen de compra</p>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex flex-row justify-between">
                        <p>Productos</p>
                        <p>$ {totalCart()}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Envío </p>
                        <p className="text-sky-500">Gratis</p>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                        <p className="font-semibold">Total </p>
                        <p className="font-semibold">$ {totalCart()}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout