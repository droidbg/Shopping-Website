import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";

export default function WishList() {
  const wishListItem = useSelector((state) => state.wishList);

  return (
    <div className="wishlist-container">
      <h2>Items in your WishList</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div>Remove</div>
        </div>
        <div className="cart-header"></div>
        {wishListItem.map(({ productId, title, rating, price, image }) => (
          <WishListItem
            key={productId}
            productId={productId}
            title={title}
            image={image}
            rating={rating.rate}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
