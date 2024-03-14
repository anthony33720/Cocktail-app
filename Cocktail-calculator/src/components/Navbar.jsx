import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-violet-700">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drink-list">DrinkList</Link>
        </li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
