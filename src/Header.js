import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart}]=useStateValue();

    return (

        
        <nav className="header" >
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>


    <Link className= "header__link" to="./" >
    <span >Home</span>


    </Link>

    <Link className= "header__link" to="./story" >
    <span >Our Story</span>
    </Link>

    <Link className= "header__link" to="./menu" >
    <span >Menu</span>
    </Link>

    <Link className="header__link" to="./checkout">
        <ShoppingCartIcon />
        <span>{cart?.length}</span>
    </Link>


    <div className="header__contacts">
    {/* <FontAwesome icon="coffee" />
    <i class=" header__icon fab fa-instagram"></i> 
    <i class="fab fa-facebook"></i> */}
    
    </div>
  


    </nav>

        
        
            
    )
}

export default Header
