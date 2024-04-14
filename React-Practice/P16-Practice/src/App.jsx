import React from "react";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import { Link, Route, Routes } from "react-router-dom";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="pt-1 container w-1/2 m-auto">
      <nav className="my-10 flex justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/:id" element={<UserDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
