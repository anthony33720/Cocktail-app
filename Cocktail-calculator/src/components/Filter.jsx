import React from "react";

const Filter = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={onChange}>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="ingredient">By Ingredient</option>
      </select>
    </div>
  );
};

export default Filter;
