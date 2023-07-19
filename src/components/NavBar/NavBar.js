import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return (

        <nav>
            <h3>Neo Ecommerce</h3>
            <div>
                <button>Motorola</button>
                <button>Apple</button>
                <button>Samsung</button>
            </div>
            <CartWidget/>
        </nav>

    )
}

export default NavBar;