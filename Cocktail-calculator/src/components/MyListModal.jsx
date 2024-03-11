import React from "react";

const MyListModal = ({ cocktails, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>My List</h2>
        <ul>
          {cocktails.map((cocktail) => (
            <li key={cocktail.id}>{cocktail.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyListModal;
