import React from "react";
import { BrowserRouter as Router, Routes, Route, }
from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar'  
import ProductsContextProvider from './Global/ProductsContext'; 
import CartContextProvider from './Global/CartContext'
import Products from './Components/Products'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'
function App() {
  return (
    <div>
    <ProductsContextProvider>
      <CartContextProvider>
    <Router>
    <NavBar />
   
    <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound /> }/>
      </Routes>
    </Router> 
    </CartContextProvider>     
    </ProductsContextProvider>

    
     
    
    </div>
  );
}

export default App;