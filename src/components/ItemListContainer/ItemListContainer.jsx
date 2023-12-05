const ItemListContainer = ({greeting , children}) => {

    return (
        <section className="container mx-auto my-8 px-4">
            <h2 className="text-lg">{greeting}</h2>
            {children}
        </section>
    )
}

export default ItemListContainer