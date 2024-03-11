import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <GoogleLoginButton />
      <img src="../public/martiniglass.jpeg" alt="" width={200} />
    </header>
  );
};

export default Header;
