import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>Agrobuy</p>
            </div>
            <ul className='nav-menu'>
                <li>Shop</li>
                <li>Equipments</li>
                <li>Seeds</li>
                <li>Fertilizers</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt='cart_icon'/>
            </div>
        </div>
    );
};

export default Navbar