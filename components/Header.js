import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import WishListIcon from "url:../assets/wishlist.svg";
import CartIcon from "url:../assets/cart.svg";
import {
  addAllProducts,
  setLoadingState,
  setError,
} from "../store/product.slice";

export default function Header() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingState());
    fetch("https://fakedataapi.vercel.app/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(addAllProducts(data));
      })
      .catch((e) => {
        dispatch(setError());
      });
  }, []);

  const cartCount = state.cartItems.cartList.reduce((prev, curr) => {
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
          <Link className="icon" to="/cart">
            <img src={CartIcon} alt="cart" />
            <div className="items-count">{cartCount}</div>
          </Link>
          <Link className="icon" to="/wishList">
            <img src={WishListIcon} alt="wishlist" width={32} />
            <div className="items-count">{wishListCount}</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
