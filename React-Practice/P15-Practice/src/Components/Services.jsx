import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";

function Services() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("/users")
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
              {item.username}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Services;
