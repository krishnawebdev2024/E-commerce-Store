import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Card from "./Card";

const Home = () => {
  const { basket, addToBasket, incrementProduct, decrementProduct } =
    useContext(ProductContext);
  /* ---------------------------------------------------------------- */
  const [products, setProducts] = useState([]);
  /* ---------------------------------------------------------------- */
  // Fetch product data from localStorage
  useEffect(() => {
    const storedProductData = localStorage.getItem("productData");
    if (storedProductData) {
      const parsedProducts = JSON.parse(storedProductData);
      setProducts(parsedProducts);
      console.log("Products:", parsedProducts); // Log the parsed products from localStorage
    }
  }, []);
  /* ---------------------------------------------------------------- */
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[100px]">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              addToBasket={addToBasket}
              incrementProduct={incrementProduct}
              decrementProduct={decrementProduct}
              basket={basket}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
