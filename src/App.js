import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';  
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/equipments" element={<ShopCategory category="equipments"/>} />
        <Route path="/seeds" element={<ShopCategory category="seeds"/>} />
        <Route path="/fertilizers" element={<ShopCategory category="fertilizers"/>} />
        <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>} /> 
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
