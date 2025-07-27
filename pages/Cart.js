import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.cartList
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        );
        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
  });

  const totalCost = cartItems.reduce((prev, current) => {
    return prev + current.quantity * current.price;
  }, 0);

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
          ({ id, productId, title, rating, price, image, quantity }) => (
            <CartItem
              key={productId || id}
              productId={productId || id}
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
