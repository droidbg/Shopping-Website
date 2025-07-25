import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../store/cartItemsReducers";

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
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button
          onClick={() => {
            dispatch(decreaseCartQuantity(productId));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispatch(increaseCartQuantity(productId));
          }}
        >
          +
        </button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
