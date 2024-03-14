import React from "react";

const CocktailItem = ({ cocktail, numCocktails }) => {
  const calculateIngredientQuantity = (ingredientQuantity, numCocktails) => {
    return (ingredientQuantity * numCocktails).toFixed(2);
  };

  return (
    <div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <p>
        All liquids are given in centiliters, other products per piece or leaf
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {cocktail.ingredientNames.map((ingredientName, index) => (
          <li key={index}>
            {ingredientName}:{" "}
            {calculateIngredientQuantity(
              cocktail.cocktailIngredients[index].quantity,
              numCocktails
            )}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

CocktailItem.defaultProps = {
  numCocktails: 1,
};

export default CocktailItem;
