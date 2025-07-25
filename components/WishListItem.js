import React from "react";
import { useDispatch } from "react-redux";
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
        <img src={image} alt={title} />
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
      >
        Remove Item
      </button>
    </div>
  );
}
