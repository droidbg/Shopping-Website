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
        <div className="icon-container">
          <Link className="icon" to="/wishList">
            <img src={WishListIcon} alt="wishlist" width={32} />
            <div className="items-count">0</div>
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
