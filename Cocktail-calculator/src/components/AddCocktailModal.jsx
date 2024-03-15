import React, { useState } from "react";
import { addCocktail } from "../services/Api";

const AddCocktailModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [quantityError, setQuantityError] = useState("");


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

  const handleSave = async () => {
    try {
      await addCocktail({ name, description, ingredients });
      setName("");
      setDescription("");
      setIngredients([{ name: "", quantity: "" }]);
      onClose();
    } catch (error) {
      console.error("Error adding cocktail:", error);
    }
  };

  return (
    <article className="grid">
      <div className="modal-content col-start-2">
        <span className="close cursor-pointer p-1 border rounded-lg border-gray-700 hover:bg-gray-900 hover:text-gray-100" onClick={onClose}>
          &times;
        </span>
        <h2 className={"text-2xl p-3"}>Enter details for new cocktail:</h2>
        <label htmlFor="cocktail-name">Name:</label>
        <input className={"add-cocktail"}
          type="text"
          id="cocktail-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cocktail-description">Description:</label>
        <textarea
            className={"add-description"}
          id="cocktail-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <h3 className={"text-2xl p-3 "}>Ingredients:</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
                className={"add-cocktail"}
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) =>
                handleIngredientChange(index, "name", e.target.value)
              }
            />
            <input
                className={"add-cocktail"}
                type="number"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue > 0) {
                    setQuantityError("");
                    handleIngredientChange(index, "quantity", newValue);
                  } else {
                    setQuantityError("Quantity must be a number greater than 0");
                  }
                }}
            />
            {quantityError && <p className="error">{quantityError}</p>}
            <button onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button className={"button-article"} onClick={handleAddIngredient}>Add Ingredient</button>
        <button className={"button-article"} onClick={handleSave}>Save</button>
      </div>
    </article>
  );
};

export default AddCocktailModal;
