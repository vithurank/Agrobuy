import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
     
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>Agrobuy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}>Shop<hr/></li>
                <li onClick={()=>{setMenu("equipments")}}>Equipments</li>
                <li onClick={()=>{setMenu("seeds")}}>Seeds</li>
                <li onClick={()=>{setMenu("fertilizers")}}>Fertilizers</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt='cart_icon'/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

export default Navbar