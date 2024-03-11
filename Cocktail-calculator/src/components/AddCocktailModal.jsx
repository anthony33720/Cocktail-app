import React, { useState } from "react";

const AddCocktailModal = ({ onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);

  const handleIngredientChange = (index, key, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][key] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleSave = () => {
    onSave({ name, description, ingredients });
    setName("");
    setDescription("");
    setIngredients([{ name: "", quantity: "" }]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Add New Cocktail</h2>
        <label htmlFor="cocktail-name">Name:</label>
        <input
          type="text"
          id="cocktail-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cocktail-description">Description:</label>
        <textarea
          id="cocktail-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <h3>Ingredients:</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            <button onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={handleAddIngredient}>Add Ingredient</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddCocktailModal;
