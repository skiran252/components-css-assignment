import React, { useEffect } from "react";
import Product from "./Product";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
export default function Home() {
  const products = useSelector((state) => state.products.products);
  const productFetchStatus = useSelector((state) => state.products.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productFetchStatus === "pending") {
      dispatch(fetchProducts());
    }
  }, [productFetchStatus, dispatch]);
  console.log(products, typeof products);
  return (
    <div className="home-container">
      <div className="filter-menu">Filter</div>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
