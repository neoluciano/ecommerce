

function CartItem ({id, title, price, quantity}) {
    
    return(
        
        <div className="cartItem">
            <p>Producto: {title}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Subtotal: ${price * quantity}</p>
        </div>


    )
}

export default CartItem;