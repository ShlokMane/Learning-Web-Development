import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className=" text-red-200 text-5xl font-bold ">User</h1>

      <div className="flex w-1/2 flex-col mt-5">
        <Link
          to="/user/shlok"
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400">
          Shlok
        </Link>
        <Link
          to="/user/sanjay"
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400">
          Sanjay
        </Link>
        <Link
          to="/user/mane"
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-400">
          Mane
        </Link>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default User;
