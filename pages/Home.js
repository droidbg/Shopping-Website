import React from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products";

export default function Home() {
  const { list, error, isLoading } = useSelector((state) => state.products);
 console.log(error)
 
  return (
    <div className="products-container">
      {isLoading ? <h1 style={{textAlign: "center"}}>Loading...</h1> : error ? <h1> {error}</h1> : list.map((product) => {
        return <Products {...product} key={product.id} />;
      })}
    </div>
  );
}
