import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return (
      <div className="bg-white relative max-w-sm rounded shadow-md hover:shadow-2xl overflow-visible">
        <Link to={`/item/${item.id}`}>
          <img className="w-full hover:scale-125 transition ease-in-out delay-150" src={item.img} alt={item.name} />
        </Link>
        <div className="absolute top-4 -right-2">
          <p className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded">${item.price}</p>
        </div>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl">{item.name}</h3>
        </div>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
      </div>
    );
  };
  
  export default ItemCard;