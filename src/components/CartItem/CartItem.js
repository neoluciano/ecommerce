import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import "./CartItem.css"

function CartItem ({id, title, price, quantity, image}) {

    const {removeItem} = useContext(CartContext);
    const subTotal = price * quantity;
    
    return(
        
        <div className="cartItem">
            <div className='detailContainer'>
                <div className='itemDetail'>
                    <p>Producto: {title}</p>
                    <p>Cantidad: {quantity}</p>
                    <p>Precio unitario: ${price}</p>
                    <p>Subtotal: ${subTotal}</p>
                </div>
                <div className='itemImage'>
                <picture>
                    <img src={image} alt={title} className="ItemImg"/>
                </picture>
                </div>
            </div>
            
            <button onClick={()=>removeItem(id, quantity, subTotal)}>Remover Item</button>
        </div>


    )
}

export default CartItem;