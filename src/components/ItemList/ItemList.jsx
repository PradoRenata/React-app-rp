import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container text-center mx-auto my-8 px-4">
        <div className="flex flex-wrap justify-start gap-10 items-center">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;