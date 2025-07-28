import React from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import {
  getProductErrorState,
  getProductList,
  getProductLoadingState,
} from "../store/product.slice";

export default function Home() {
  const list = useSelector(getProductList);
  const isLoading = useSelector(getProductLoadingState);
  const error = useSelector(getProductErrorState);

  return (
    <div className="products-container">
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : error ? (
        <h1> {error}</h1>
      ) : (
        list.map((product) => {
          return <Products {...product} key={product.id} />;
        })
      )}
    </div>
  );
}
