import "./Item.css";



function Item ({id, title, image, price, stock }){

    console.log(stock)

    return (
        <article className="CardItem">
            <header className="CardItemHeader">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture className="Imagen">
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock } 
                </p>
            </section>
            <footer className="CardItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    )

}

export default Item;