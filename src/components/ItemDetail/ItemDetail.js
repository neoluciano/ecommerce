import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

function ItemDetail ({id, title, image, category, description, price, stock}) {

    const {addItem} = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity)=>{
        setQuantityAdded(quantity);
        console.log("Cantidad agregada de items ", quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity);

    }
 
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descricion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (<Link to='/cart' className='Option'>Terminar compra</Link>)
                    :(<ItemCount initial={1} stock={stock} onAdd={ handleOnAdd }/>)
                }

                
            </footer>
        </article>

    )

}

export default ItemDetail;