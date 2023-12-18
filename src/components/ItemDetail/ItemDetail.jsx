import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    return (
      <div className="container m-auto mt-8">
        <img className="w-full" src={item.img} alt={item.name} />
        <div className="absolute top-4 -right-2">
          <p className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded">${item.price}</p>
        </div>
        <div className="px-6 py-4 text-start">
          <h3 className="font-bold text-xl mb-2">{item.name}</h3>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
      </div>
    );
  };
  
  export default ItemDetail;
  