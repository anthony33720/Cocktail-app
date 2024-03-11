import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SavedCocktails from "../components/SavedCocktails";
import AddCocktailModal from "../components/AddCocktailModal";

const MyList = () => {
  const [savedCocktails, setSavedCocktails] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    // Fetch saved cocktails from backend API
    // Example:
    // fetchSavedCocktails().then(data => setSavedCocktails(data));
    // Replace fetchSavedCocktails with your API call
    const mockSavedCocktails = [
      {
        id: 1,
        name: "Mojito",
        description: "A refreshing cocktail with lime and mint",
      },
      {
        id: 2,
        name: "Martini",
        description: "A classic cocktail made with gin and vermouth",
      },
    ];
    setSavedCocktails(mockSavedCocktails);
  }, []);

  const handleAddCocktail = (newCocktail) => {
    // Add new cocktail to the list of saved cocktails
    // Example:
    // addCocktail(newCocktail).then(data => setSavedCocktails([...savedCocktails, data]));
    // Replace addCocktail with your API call
    setSavedCocktails([...savedCocktails, newCocktail]);
    setShowAddModal(false); // Close the modal after adding the cocktail
  };

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div>
      <Header title="My List" />
      <button onClick={handleShowAddModal}>Add Cocktail</button>
      <SavedCocktails cocktails={savedCocktails} />
      {showAddModal && <AddCocktailModal onSave={handleAddCocktail} />}
    </div>
  );
};

export default MyList;
