import React from "react";

const Dropdown = ({ options, onSelect, value }) => {
  return (
    <select onChange={onSelect} value={value} className={"border-solid border-2 border-gray-900 rounded-lg"}>
      <option value="">Select a Drink</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
