import React from "react";

const CocktailList = ({ cocktails, onCocktailClick }) => {
  return (
    <div>
      {cocktails.map((cocktail) => (
        <div key={cocktail.id} onClick={() => onCocktailClick(cocktail)}>
          <h3>{cocktail.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
