import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    // <img className="logo-Image" src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>Neo Ecommerce</h3>
               
            </Link>
            </div>
            <div className="navbar-menu">
                <div className="columnss">
                    <div className="column">
                        <NavLink to={`/category/iphone`} className={({isActive}) => isActive ? 'ActiveOption2' : 'Option2'}> iPhone</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/mac`} className={({isActive}) => isActive ? 'ActiveOption2' : 'Option2'}>Mac</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/ipad`} className={({isActive}) => isActive ? 'ActiveOption2' : 'Option2'}>iPad</NavLink>
                    </div>
                </div>
                
            </div>
            <div className="cart-widget">
            <CartWidget/>
            </div>
            
            
            
            
        </nav>

    )
}

export default NavBar;