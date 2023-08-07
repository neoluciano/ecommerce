import CartWidget from "../CartWidget/CartWidget";
import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h3>Neo Ecommerce</h3>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/hombre`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Hombre</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/mujer`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mujer</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/joyeria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joyeria</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;