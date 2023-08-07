import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



function ItemDetailContainer () {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams();
    console.log("El item iD QUE llega es: ", itemId);
    useEffect(()=>{
        getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error);
        })
    }
    ,[itemId])

    return(
        <div className="ItemDetailContainer">

            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer;