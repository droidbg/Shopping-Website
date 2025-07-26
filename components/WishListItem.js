import React from "react";
import { useDispatch } from "../react-redux";
import { removeWishListItem } from "../store/wishListReducer";

export default function WishListItem({
  productId,
  title,
  rating,
  price,

  image,
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
      <button
        onClick={() => {
          dispatch(removeWishListItem(productId));
        }}
        className="blue-button"
      >
        Remove Item
      </button>
    </div>
  );
}
