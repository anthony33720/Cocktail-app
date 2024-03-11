import React from "react";

const DisplayBox = ({ ingredients }) => {
  return (
    <div>
      <h3>Result Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.quantity} cl
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayBox;
