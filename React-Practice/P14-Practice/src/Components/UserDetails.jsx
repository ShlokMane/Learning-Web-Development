import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
  const data = useParams();
  const navigate = useNavigate();
  const goBackHandler = () => {
    // navigate("/user");
    navigate(-1);
  };
  return (
    <div className="m-auto mt-10">
      <h1 className=" text-red-200 text-5xl font-bold ">User Details</h1>
      <h1 className="text-3xl mt-3">
        Hi {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </h1>
      <button
        className="text-white p-3 bg-red-300 rounded-md mt-5 px-3 py-2"
        onClick={() => {
          goBackHandler();
        }}>
        Go Back
      </button>
    </div>
  );
};
