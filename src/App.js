import React from 'react';
import './App.css';
import './Components/Footer/Footer.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';  
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import equipments_banner from './Components/Assets/banner_equipments.png';
import seeds_banner from './Components/Assets/banner_seeds.png';
import fertilizers_banner from './Components/Assets/banner_fertilizers.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/equipments" element={<ShopCategory banner={equipments_banner} category="equipments"/>} />
        <Route path="/seeds" element={<ShopCategory banner={seeds_banner} category="seeds"/>} />
        <Route path="/fertilizers" element={<ShopCategory banner={fertilizers_banner} category="fertilizers"/>} />
        <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>} /> 
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
