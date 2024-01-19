import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({productos}) => {

  return (

    <section className="container text-center mx-auto my-8 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;