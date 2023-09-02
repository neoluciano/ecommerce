import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import "./ItemDetail.css"

function ItemDetail ({id, title, image, category, description, price, stock}) {

    const {addItem} = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity)=>{
        setQuantityAdded(quantity);
        console.log("Cantidad agregada de items ", quantity)

        const item = {
            id, title, price, image
        }

        addItem(item, quantity);

    }
 
    return (
        <article className="CardItem2">
            <header className="Header">
                <h2 className="ItemHeader">
                    <b>{title}</b>
                </h2>
            </header>
            <div className="ItemDetailColumns">
                <div className="ItemDetailColumn1">            
                <picture>
                    <img src={image} alt={title} className="ItemImgDetail"/>
                </picture>
                <section>
                    
                    <p className="InfoDescription">
                        <b>Descricion:</b> {description}
                    </p>
                    
                </section>
                </div> 
                <div className="ItemDetailColumn2">
                    <div>
                    <section>
                    <p className="InfoPrice">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        <b>Categoria:</b> {category}
                    </p>
                    
                    </section>
                    </div>
                    <div>
                    <footer className="ItemFooterDetail">
                        {
                            quantityAdded > 0 ? (<Link to='/cart' className='buyButton'>Terminar compra</Link>)
                            :(<ItemCount initial={1} stock={stock} onAdd={ handleOnAdd }/>)
                        }
                        <Link to='/' className="secondaryButton">Volver</Link>
                        
                    </footer>
                    </div>
                    
                </div>    

            </div>
                   
            
        </article>

    )

}

export default ItemDetail;