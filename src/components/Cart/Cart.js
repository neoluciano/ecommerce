import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import CartItem from '../CartItem/CartItem';




function Cart () {

    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);
    console.log('TotalQuantity: ' + totalQuantity)
    if(totalQuantity===0){
        return (
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to={'/'} className='Option'>Volver a Home</Link>
            </div>
        )
    }

    return (

        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: $ {total}</h3>
            <button onClick={()=>clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>CheckOut</Link>
        </div>

    )



}

export default Cart;