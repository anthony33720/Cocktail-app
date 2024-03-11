import React from "react";

const SavedCocktails = ({ cocktails }) => {
  return (
    <div>
      <h3>Saved Cocktails:</h3>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.id}>
            {cocktail.name} - {cocktail.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCocktails;
