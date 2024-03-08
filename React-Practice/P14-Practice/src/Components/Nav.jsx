import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-center gap-10 mt-10">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/">
        {" "}
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user">
        User
      </NavLink>
      <NavLink to="/about">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}>
              About
            </span>
          );
        }}
      </NavLink>
    </nav>
  );
}

export default Nav;
