import React from "react";
import { useSelector } from "../react-redux";
import Products from "../components/Products";

export default function Home() {
  const productsList = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productsList.map((product) => {
        return <Products {...product} key={product.id} />;
      })}
    </div>
  );
}
