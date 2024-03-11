// DisplayBox.js
import React from "react";

const DisplayBox = ({ ingredients, numCocktails }) => {
  console.log("Ingredients:", ingredients);
  console.log("Num Cocktails:", numCocktails);

  const calculateIngredientQuantity = (ingredientQuantity, numCocktails) => {
    return (ingredientQuantity * numCocktails).toFixed(2);
  };

  return (
    <div>
      <h3>Result Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}:{" "}
            {calculateIngredientQuantity(ingredient.quantity, numCocktails)} cl
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayBox;
