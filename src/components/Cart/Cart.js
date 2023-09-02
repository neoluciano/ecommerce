import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import "./Cart.css"




function Cart () {

    const {cart, clearCart, totalQuantity, totalAmountInCart} = useContext(CartContext);
    console.log('TotalQuantity: ' + totalQuantity)
    if(totalQuantity===0){
        return (
            <div className='emptyCart'>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'} className='Option'>Volver a Home</Link>
            </div>
        )
    }

    return (

        <div className='cartItemsContainer'>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className='totalAmount'>
                <h3>Total: $ {totalAmountInCart}</h3>
            </div>
            <div className='ctas'>
                <Link to='/checkout' className='Button'>CheckOut</Link>
                <button onClick={()=>clearCart()} className="secondaryButton">Limpiar Carrito</button>
            </div>
         
            
        </div>

    )



}

export default Cart;