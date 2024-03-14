import React from "react";

const QuantityInput = ({ value, onChange }) => {
  return (
    <div className={"border-solid border-2 border-gray-900 rounded-l"}>
      <label htmlFor="quantity">Quantity: </label>
      <input className={"outline-offset-0"}
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
