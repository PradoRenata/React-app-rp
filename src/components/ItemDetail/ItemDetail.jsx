import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {

    return (
      <div className="container text-center mx-auto my-8 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
          <img className="w-1/2 hover:scale-125 transition ease-in-out delay-150" src={item.img} alt={item.name} />
          <div className="bg-white rounded py-6 text-start">
            <h3 className="font-bold text-xl mb-2 px-6">{item.name}</h3>
            <p className="text-gray-700 text-base py-3 px-6">{item.description}</p>
            <p className="text-blue-800 font-semibold px-6">${item.price}</p>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetail;
  