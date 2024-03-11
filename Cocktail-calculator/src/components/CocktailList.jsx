import React from "react";

const CocktailList = ({ cocktails }) => {
  return (
    <div>
      <h3>Cocktails:</h3>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            <button>{cocktail.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
