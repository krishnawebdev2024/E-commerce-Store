import React, { useEffect } from "react";

const fetchProductData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    localStorage.setItem("productData", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

const FetchApi = () => {
  useEffect(() => {
    if (localStorage.getItem("productData")) {
      return; // avoid fetching data again if data already exists in local storage
    } else {
      fetchProductData();
    }
  }, []);
};

export default FetchApi;
