import cart from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {Link} from 'react-router-dom';
import "./CartWidget.css";

function CartWidget (){

    const {totalQuantity} = useContext(CartContext);
    console.log('Widget totalQuantity:' + totalQuantity)

    return (
        <Link to='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block':'none'}}>
             <img className="CartImg" src={cart} alt="cart-widget"/>
             {totalQuantity}
        </Link>
    )
}

export default CartWidget;