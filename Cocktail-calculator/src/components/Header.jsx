import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src="/martiniglass.jpeg" alt="" width={200} />
    </header>
  );
};

export default Header;
