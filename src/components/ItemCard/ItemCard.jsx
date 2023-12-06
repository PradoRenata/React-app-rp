const ItemCard = ({item}) => {

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.img} alt={item.name} />
        <div className="px-6 py-4 text-start">
            <h3 className="font-bold text-xl mb-2">{item.name}</h3>
            <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="flex px-6 py-4 items-center justify-between">
            <p className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded">${item.price}</p>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar al carro</button>
        </div>


      </div>
    );
  };
  
  export default ItemCard;