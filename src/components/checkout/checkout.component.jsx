import { useContext } from 'react';
// import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div class="header-block">
          <span>Product</span>
        </div>
        <div class="header-block">
          <span>Description</span>
        </div>
        <div class="header-block">
          <span>Quantity</span>
        </div>
        <div class="header-block">
          <span>Price</span>
        </div>
        <div class="header-block">
          <span>Remove</span>
        </div>
      </div>

      <h1>I'm the checkout page</h1>

      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        );
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
