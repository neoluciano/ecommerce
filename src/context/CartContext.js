import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([]);
    console.log(cart)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
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
    }

    const isInCart = (itemId)=>{
        return cart.some(prod => prod.id === itemId)
    }

    const total = 666;

    const totalQuantity = 5;

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}