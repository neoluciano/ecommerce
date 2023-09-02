import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductsByCategory } from "../../asyncMock";//esta deberia dejar de usarse
import { useParams } from "react-router-dom";
import {db} from "../../services/firebase/firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";
import "./ItemListContainer.css"
import LoaderEcom from "../Loader/LoaderEcom";



function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
    const [loading, setLoading] = useState(false);

    console.log("La categoria que llego aca es:", categoryId)

    //Con el useEffect hago el llamado a la API o en este caso el asyncMock:
    useEffect(()=>{
        setLoading(true);
        const collectionRef = categoryId
        ? query(collection(db, 'catalogo'), where('category','==',categoryId))
        : collection(db, 'catalogo')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                console.log('Aqui va el setLoader false')
                setLoading(false);
            })

        // const asyncFunc = categoryId ? getProductsByCategory : getProductos

        // asyncFunc(categoryId)
        //     .then(response => {
        //         setProducts(response);
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    },[categoryId]) //El segundo parametro con un array vacio significa que solo se va a ejecutar cuando se renderize por primera vez
    //Fin del useEffect


    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <LoaderEcom/>: <ItemList products={products}/>}
        </div>
    )

}

export default ItemListContainer;