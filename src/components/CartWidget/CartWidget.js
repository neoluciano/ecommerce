import cart from "./assets/cart.svg";

function CartWidget (){

    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget;