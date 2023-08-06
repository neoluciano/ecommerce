import Item from "../Item/Item";
import "./ItemList.css"

function ItemList ({products}){

    console.log(products);
    return (
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )

}
export default ItemList;