import React from "react";

const DescriptionInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        name="description"
        value={value}
        onChange={onChange}
        rows="4"
      ></textarea>
    </div>
  );
};

export default DescriptionInput;
