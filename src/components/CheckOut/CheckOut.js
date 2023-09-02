import { addDoc, collection, getDocs, Timestamp, writeBatch, query, where, documentId } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {db} from "../../services/firebase/firebaseConfig";
import CheckOutForm from "../CheckOutForm/CheckOutform";
import "./CheckOut.css"

function CheckOut () {
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);

    const {cart, totalAmountInCart, clearCart} = useContext(CartContext);

    const createOrder = async ( {name, phone, email} ) => {
        setLoading(true);

        try{
            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                total: totalAmountInCart,
                date: Timestamp.fromDate(new Date())
            }
        

        const batch = writeBatch(db);

        const outOfStock = [];

        const ids = cart.map(prod => prod.id);

        const productsRef = collection(db, 'catalogoS');

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in',ids)))

        const {docs} = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection (db, 'orders')
            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
        } else {
            console.error('Hay productos que estan sin stock')
        }

        } catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
        
    }

    if (loading) {
        return <h2>Se esta generando su orden...</h2>
    }

    if (orderId) {
        return <h2>El id de su orden es: {orderId}</h2>
    }

    return (
        <div className="CheckOutContainer">
            <h1>Checkout</h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut;