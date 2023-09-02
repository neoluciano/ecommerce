import { useState } from "react";
import "./ItemCount.css"


const ItemCount = ({stock, initial, onAdd})=>{

    //Creo un estado
    const [quantity, setQuantity] = useState(initial)

    function increment (){
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    function decrement (){
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }


    return (

        <div className="Counter">
            <div className="Controls">
                <button className="PlusMinusButton" onClick={decrement}>-</button>
                {stock===0?<h4>Sin Stock</h4>:<h4 className="Number">{quantity}</h4>}                
                <button className="PlusMinusButton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="AddToCartButton" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito!
                </button>
            </div>
        </div>

    )

}

export default ItemCount;