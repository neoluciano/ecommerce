import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";

function NavBar (){
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="http://www.google.com">
                <img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
                <h3>Neo Ecommerce</h3>
            </a>
            
            <div className="navbar-menu">
                <a className="navbar-item">Motorola</a>
                <a className="navbar-item">Apple</a>
                <a className="navbar-item">Samsung</a>
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;