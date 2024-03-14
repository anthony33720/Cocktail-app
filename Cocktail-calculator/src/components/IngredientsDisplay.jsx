import React from "react";

const IngredientsDisplay = ({ cocktail, numCocktails }) => {
    const calculateIngredientQuantity = (ingredientQuantity, numCocktails) => {
        return (ingredientQuantity * numCocktails).toFixed(2);
    };

    return (
        <div className={"grid border-2 rounded-lg border-gray-700 p-5"}>
            <h2 className={"font-bold text-3xl border-b-4 border-double p-3"}>{cocktail.name}</h2>
            <h3 className={"text-2xl p-3"}>Informations regarding ingredients:</h3>
            <p className={"font"}>
                All liquids are given in centiliters, other products per piece or leaf
            </p>
            <h3  className={"text-2xl  p-3"}>Quantity of ingredients:</h3>
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

IngredientsDisplay.defaultProps = {
    numCocktails: 1,
};

export default IngredientsDisplay;
