import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "url:../assets/cart.svg";
import WishListIcon from "url:../assets/wishlist.svg";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const cartCount = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart" />
          <div className="cart-items-count">{cartCount}</div>
        </Link>
        <Link className="cart-icon" to="/wishList">
          <img src={WishListIcon} alt="wishlist" width={40} />
          <div className="cart-items-count">0</div>
        </Link>
      </div>
    </header>
  );
}
