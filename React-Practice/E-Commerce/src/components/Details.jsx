import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[80%] h-full bg-red-100 m-auto p-[10%] flex items-center justify-center">
      <img
        className="h-[80%] w-[]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
      <div className="content">
        <h1>Title</h1>
        <h2>Price</h2>
        <p>Description</p>
        <Link>Edit</Link>
        <Link>Delete</Link>
      </div>
    </div>
  );
};

export default Details;
