const ItemListContainer = ({greeting}) => {

    return (
        <section className="container mx-auto my-8 px-4">
            <h2 className="text-lg">Productos</h2>
            <p className="" >{greeting}</p>
        </section>
    )
}

export default ItemListContainer