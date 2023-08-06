import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../asyncMock";
import "./ItemListContainer.css"



function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    //Con el useEffect hago el llamado a la API o en este caso el asyncMock:
    useEffect(()=>{
        getProductos()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            })
    },[]) //El segundo parametro con un array vacio significa que solo se va a ejecutar cuando se renderize por primera vez
    //Fin del useEffect


    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer;