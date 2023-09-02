import { useState, useEffect } from "react";
import {getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../../services/firebase/firebaseConfig";
import {getDoc, doc} from "firebase/firestore";
import LoaderEcom from "../Loader/LoaderEcom";
import "./ItemDetailContainer.css"



function ItemDetailContainer () {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams();
    const [loading, setLoading] = useState(false);

    console.log("El item iD QUE llega es: ", itemId);
    useEffect(()=>{
        setLoading(true);
        const docRef = doc(db, 'catalogo', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id:response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false);
            console.log('Aqui va el setLoader false')
        })

        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response);
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    }
    ,[itemId])

    return(
        <div className="ItemDetailContainer">
            {loading ? <LoaderEcom/>: <ItemDetail {...product}/>}
            
        </div>
    )

}

export default ItemDetailContainer;