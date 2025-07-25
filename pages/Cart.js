import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "../react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  // console.log(cartItems);
  const totalCost = cartItems.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);
  // console.log(totalCost);

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(
          ({ productId, title, rating, price, image, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              image={image}
              rating={rating.rate}
            />
          )
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalCost}</div>
        </div>
      </div>
    </div>
  );
}
