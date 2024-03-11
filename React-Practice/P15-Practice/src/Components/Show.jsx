import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";

function Show() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("/products")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("Show started");
    getProducts();
    return () => console.log("Show stopped");
  }, []);
  return (
    <>
      <ul className="mt-10 rounded-md">
        {products.length > 0 ? (
          products.map((item, index) => (
            <li key={index} className="rounded-md mb-2 p-5 bg-red-200">
              {item.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
