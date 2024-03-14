import React from "react";

const CocktailList = ({ cocktails, onCocktailClick }) => {
  return (
    <div className={"flex flex-col items-center p-10 mb-5 text-2xl font-bold hover:text-gray-800 max-h-32 "}>
      {cocktails.map((cocktail) => (
        <div key={cocktail.id} onClick={() => onCocktailClick(cocktail)}>
          <h3 className={"cursor-pointer p-5"}>{cocktail.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
