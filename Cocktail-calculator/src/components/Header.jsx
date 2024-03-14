import React from "react";

const Header = ({ title }) => {
  return (
    <header className={"grid grid-cols-5 gap-4 place-content-end border-b-4 border-double border-grey-600 p-4 h20"}>
      <h1 className={"col-start-3 justify-center col-span-2 font-bold text-4xl border-b-4-grey-600"}>{title}</h1>
      <img src="/martiniglass.jpeg" alt="Martini glass" className="max-w-10 justify-self-end" />
    </header>
  );
};

export default Header;
