import React from "react";

const CocktailItem = ({ cocktail }) => {
  return (
    <div>
      <h3>{cocktail.name}</h3>
      <p>Description: {cocktail.description}</p>
      <ul>
        {cocktail.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}: {ingredient.quantity} cl
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailItem;
