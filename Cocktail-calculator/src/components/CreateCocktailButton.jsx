import React from "react";

const CreateCocktailButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Create Cocktail</button>
    </div>
  );
};

export default CreateCocktailButton;
