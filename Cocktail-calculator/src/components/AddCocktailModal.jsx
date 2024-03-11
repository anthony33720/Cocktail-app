import React, { useState } from "react";

const AddCocktailModal = ({ onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    onSave({ name, description });
    setName("");
    setDescription("");
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
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddCocktailModal;
