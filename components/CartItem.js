import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../store/cartItem.slice";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  image,
  quantity,
}) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={image} alt={title} className="image-item" />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          className="pink-button-cart"
          onClick={() => {
            dispatch(decreaseCartQuantity({ productId }));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="pink-button-cart"
          onClick={() => {
            dispatch(increaseCartQuantity({ productId }));
          }}
        >
          +
        </button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  );
}
