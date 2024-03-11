import React from "react";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div>
      <h3>{ingredient.name}</h3>
      <p>Description: {ingredient.description}</p>
      {/* You can add more details about the ingredient here */}
    </div>
  );
};

export default IngredientDetails;
