import React, {useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
     
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>Agrobuy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("equipments")}}><Link style={{textDecoration: 'none'}}  to='/equipments'>Equipments</Link>{menu==="equipments"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("seeds")}}><Link style={{textDecoration: 'none'}}  to='/seeds'>Seeds</Link>{menu==="seeds"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("fertilizers")}}><Link style={{textDecoration: 'none'}}  to='/fertilizers'>Fertilizers</Link>{menu==="fertilizers"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button> </Link>
                <Link to='/cart'><img src={cart_icon} alt='cart_icon'/></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

export default Navbar