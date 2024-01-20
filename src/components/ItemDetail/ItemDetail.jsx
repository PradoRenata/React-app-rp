import ItemCount from "../ItemCount/ItemCount";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const navigate = useNavigate()
    const handleBack = () => {
      navigate(-1)
    }

    return (

      <div className="container mx-auto">
        <div className="flex flex-row gap-2 justify-start mt-4">
          <button className="flex gap-2 items-center text-slate-700" onClick={handleBack}><ChevronLeft color='#1F2937' size="20" />Volver</button>
          <span className='px-4 text-slate-400'>|</span>
          <button className="text-blue-500">Ver más en ItemCategory</button>
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
            <ItemCount initial={1} stock={item.stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  