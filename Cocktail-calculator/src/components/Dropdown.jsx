import React from "react";

const Dropdown = ({ options, onSelect, value }) => {
  return (
    <select onChange={onSelect} value={value}>
      <option value="">Select a Cocktail</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
