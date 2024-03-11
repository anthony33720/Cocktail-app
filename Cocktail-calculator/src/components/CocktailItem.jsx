import React from "react";

const CocktailItem = ({ cocktail }) => {
  return (
    <div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {cocktail.ingredients.map((ingredient, index) => (
          <li key={index}>
            <strong>{ingredient.name}:</strong> {ingredient.amount} -{" "}
            {ingredient.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailItem;
