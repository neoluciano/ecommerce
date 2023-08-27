import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmountInCart, setTotalAmountInCart] = useState(0);
    console.log(cart)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
            console.log('Items del cart: ' + quantity);
            setTotalQuantity(totalQuantity + quantity);
            setTotalAmountInCart(totalAmountInCart + (item.price * quantity));
        }
        else {
            console.error('El producto ya existe en el carrito. No se puede volver a agregar')
        }
    }

    const removeItem = (itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated);
    }

    const clearCart = ()=>{
        setCart([]);
        setTotalQuantity(0);
        setTotalAmountInCart(0);
    }

    const isInCart = (itemId)=>{
        return cart.some(prod => prod.id === itemId)
    }
   
    

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalAmountInCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}