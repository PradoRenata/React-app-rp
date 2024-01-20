import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import CarouselSlider from "../CarouselSlider/CarouselSlider"
import  Loader  from "../Loader/Loader"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
      setLoading(true)

      pedirDatos()
          .then((data) => {
              const items = categoryId 
                              ? data.filter(prod => prod.category === categoryId)
                              : data

              setProductos(items)
          })
          .finally(() => setLoading( false ))
    }, [categoryId])

    return (
        <>
            <CarouselSlider/>
            {
                loading
                    ? <Loader/>
                    : <ItemList productos={productos}/>
            }
       </>
    )
}

export default ItemListContainer