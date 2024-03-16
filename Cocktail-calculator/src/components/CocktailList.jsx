import React from "react";

const CocktailList = ({ cocktails, onCocktailClick }) => {
  const sortedCocktails = cocktails.sort((a, b) => a.name.localeCompare(b.name));

  return (
      <div className={"grid grid-cols-3 divide-x gap-4 h-5/6 w-4/5 mx-auto p-10 mb-5 text-2xl font-bold hover:text-gray-800 "}>
        {sortedCocktails.map((cocktail) => (
            <div key={cocktail.id} onClick={() => onCocktailClick(cocktail)}>
              <h3 className={"cursor-pointer p-5"}>{cocktail.name}</h3>
            </div>
        ))}
      </div>
  );
};

export default CocktailList;
