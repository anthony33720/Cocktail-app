import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 h-20">
      <ul className="grid grid-cols-6
      place-content-between
      pt-5">
        <li className="col-start-2
        justify-self-center
        px-3
        py-2
        col-span-1
        text-2xl
        bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-1000 rounded">
          <Link to="/">Home</Link>
        </li>
        <li className="col-start-4 justify-self-center px-3 py-2 col-span-2 text-2xl bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-1000 rounded ">
          <Link to="/drink-list">DrinkList</Link>
        </li>
        <li className="col-start-6 justify-self-center px-3 py-2 text-2xl text-blue-0 hover:text-gray-100 "><button>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
