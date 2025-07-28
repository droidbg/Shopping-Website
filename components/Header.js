import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import WishListIcon from "url:../assets/wishlist.svg";
import CartIcon from "url:../assets/cart.svg";
import {
  addAllProducts,
  setProductLoadingState,
  setProductError,
} from "../store/product.slice";
import {
  loadAllCartItems,
  setCartError,
  setCartLoadingState,
} from "../store/cartItem.slice";
import { makeApiCall } from "../middleware/api";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      makeApiCall({
        endpoint: "api/products",
        onStart: setProductLoadingState.type,
        onError: setProductError.type,
        onSuccess: addAllProducts.type,
      })
    );

    dispatch(
      makeApiCall({
        endpoint: "api/carts",
        onStart: setCartLoadingState.type,
        onError: setCartError.type,
        onSuccess: loadAllCartItems.type,
      })
    );
  }, []);

  const cartCount = cartItems.cartList.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);
  const wishListCount = wishList.length;

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
