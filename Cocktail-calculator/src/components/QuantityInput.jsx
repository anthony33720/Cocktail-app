import React from "react";

const QuantityInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={value}
        onChange={onChange}
        min="0"
        step="1"
      />
    </div>
  );
};

export default QuantityInput;
