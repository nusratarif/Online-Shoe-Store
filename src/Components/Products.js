import React, { useContext} from 'react';
import {ProductsContext} from '../Global/ProductsContext';
import {CartContext} from '../Global/CartContext'
import Banner from './Banner'

const Products = () => {
  const {products} = useContext(ProductsContext);
  const {dispatch} = useContext(CartContext);
  
  return(
    <div className="container">  
    <Banner /> 
     <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-image">
          {product.status === 'hot' ?  <div className="hot">Hot</div> : ''}
            {product.status === 'new' ?  <div className="new">New</div> : ''}
            <img src={product.image} alt="not found" />
          </div>
          <div className="product-details">
            <div className="product-name">
              {product.name}
            </div>
            <div className="product-price">
              Rs.{product.price}
            </div>
          </div>            
            <div className="add-to-cart" 
            onClick={() => dispatch
            ({type: 'ADD_TO_CART', id:product.id, product})}>
              Add to Cart</div> 
            
        </div>
      ))}       
    </div>
    </div>
  )
}
export default Products; 