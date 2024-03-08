import React, { useState } from "react";
import axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={getProducts} className="rounded-md bg-red-500 px-5 py-2">
        Get Product API
      </button>
      <ul className="mt-10 bg-red-200 rounded-md">
        {products.length > 0 ? (
          products.map((item, index) => <li>{item.title}</li>)
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
