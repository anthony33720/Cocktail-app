import React from "react";

const IngredientInput = ({ index, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`ingredient-${index}`}>Ingredient {index + 1}: </label>
      <input
        type="text"
        id={`ingredient-${index}`}
        name={`ingredient-${index}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default IngredientInput;
