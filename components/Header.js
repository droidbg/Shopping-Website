import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "url:../assets/cart.svg";
import WishListIcon from "url:../assets/wishlist.svg";

export default function Header() {
  const state = useSelector((state) => state);
  const cartCount = state.cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);
  const wishListCount = state.wishList.length;

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="icon-container">
          <Link className="icon" to="/wishList">
            <img src={WishListIcon} alt="wishlist" width={32} />
            <div className="items-count">{wishListCount}</div>
          </Link>
          <Link className="icon" to="/cart">
            <img src={CartIcon} alt="cart" />
            <div className="items-count">{cartCount}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
