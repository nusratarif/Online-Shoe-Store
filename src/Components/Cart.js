import React, {useContext} from 'react';
import {CartContext} from '../Global/CartContext'


const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
    
  return(
    <div className="cart-container">
      <div className="cart-details"
       style={{marginTop: '100px'}}>
        {shoppingCart.length > 0 ? 
        shoppingCart.map(cart => (<div className="cart" key={cart.id}>
          <span className="cart-image"><img src={cart.image} alt="not found" /></span>
          <span className="cart-product-name">{cart.name}</span>
          <span className="cart-product-price">Rs.{cart.price}</span>
          <span className="inc" onClick={() => dispatch({type: 'INCREAMENT', id: cart.id, cart})}>
            <i className="fas fa-plus"></i></span>
          <span className="product-quantity">{cart.qty}</span>
          <span className="dec" onClick={() => dispatch({type: 'DECREAMENT', id: cart.id, cart})}>
            <i className="fas fa-minus"></i></span>
          <span className="product-total-price">Rs.{cart.price * cart.qty}</span>
          <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}>
            <i className="fas fa-trash"></i></span>
        </div>
        )) 
        : 'Sorry your cart is empty!'}
     </div>
     {shoppingCart.length > 0 ? <div className="cart-summary">
       <div className="summary">
         <h3>Cart Summary</h3>
         <div className="total-items">
           <div className="items">Total Items</div>
           <div className="item-count">{qty}</div>
         </div>
         <div className="total-price-section">
           <div className="just-title">Total Price</div>
           <div className="item-price">Rs.{totalPrice}</div>
           </div>
           
       </div>
     </div> : ''}
    </div>
  )
}
export default Cart; 



