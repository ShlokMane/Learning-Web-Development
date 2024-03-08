import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import { UserDetails } from "../Components/UserDetails";

function Rounting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />}>
        <Route path="/user/:name" element={<UserDetails />} />
        {/* This we are doing to open UserDetails Component inside User Component and inside we need to use Outlet Tag */}
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Rounting;
