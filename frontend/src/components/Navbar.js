import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return <nav className="navbar">

        {/*logo*/}
        <div className="navbar__logo">
            <h2>ichan Shopping Cart</h2>
        </div>

        {/*links*/}
        <div className="navbar__links">
            <li>
                <Link to = "/cart" className="cart__link">
                <i className="fas fa-shopping-cart"></i>
                <span>
                Cart
                <span className="cartlogo_badge">0</span>
                </span>
                </Link>
            </li>
            <li>
                <Link to = "/">
                Shop
                </Link>
            </li>
        </div>
        {/*hamburger menu*/}
        <div className="hamburger__menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>    
};
export default Navbar;