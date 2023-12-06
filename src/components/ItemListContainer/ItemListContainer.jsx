import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [productos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                setProdutos( data )
                setLoading( false )
            })
    }, [])

    return (
        <>
            {
                loading
                    ? <h2 className="text-center text-2xl mt-8">Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
       </>

        // <section className="container text-center mx-auto my-8 px-4 ">
        //     <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">{greeting}</span>
        //     {children}
        // </section>
    )
}

export default ItemListContainer