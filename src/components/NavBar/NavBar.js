import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";

function NavBar (){
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="http://www.google.com">
                <img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
                <h3>Neo Ecommerce</h3>
            </a>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <a className="navbar-item">Motorola</a>
                    </div>
                    <div className="column">
                        <a className="navbar-item">Apple</a>
                    </div>
                    <div className="column">
                        <a className="navbar-item">Samsung</a>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;