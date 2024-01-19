import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return (
      <div className="bg-white max-w-sm rounded">
        <div className="overflow-hidden">
          <Link to={`/item/${item.id}`}>
            <img className="w-full hover:scale-125 transition ease-in-out delay-150" src={item.img} alt={item.name} />
          </Link>
        </div>
        <div className="p-4 text-start flex-col gap-2">
          <h3 className="text-slate-800 text-sm pb-2">{item.name}</h3>
          <h4 className="text-slate-800 text-lg">$ {item.price}</h4>
        </div>
      </div>
    );
  };
  
  export default ItemCard;