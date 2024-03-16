import React from "react";

const CocktailItem = ({ cocktail, numCocktails }) => {
  const calculateIngredientQuantity = (ingredientQuantity, numCocktails) => {
    return (ingredientQuantity * numCocktails).toFixed(2);
  };

  return (
    <section className={"grid border-2 rounded-lg border-gray-700 p-5 bg-black text-white"}>
      <h2 className={"font-bold text-3xl border-b-4 border-double p-3"}>{cocktail.name}</h2>
        <h3 className={"text-2xl p-3"}>Step-by-step:</h3>
      <p>{cocktail.description}</p>
        <h3 className={"text-2xl  p-3"}>Informations regarding ingredients:</h3>
      <p>
        All liquids are given in centiliters, other products per piece or leaf
      </p>
      <h3 className={"text-2xl  p-3"}>Ingredients:</h3>
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
    </section>
  );
};

CocktailItem.defaultProps = {
  numCocktails: 1,
};

export default CocktailItem;
