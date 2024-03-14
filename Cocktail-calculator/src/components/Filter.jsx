import React from "react";

const Filter = ({ onChange }) => {
  return (
    <div className={"text-2xl ml-5"}>
      <label htmlFor="filter" className={""}>Filter:</label>
      <select id="filter" onChange={onChange} className={"border rounded-lg border-gray-700"}>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="ingredient">By Ingredient</option>
      </select>
    </div>
  );
};

export default Filter;
