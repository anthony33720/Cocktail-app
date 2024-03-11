import React, { useState } from "react";
import Header from "../components/Header";
import AddCocktailModal from "../components/AddCocktailModal";
import SavedCocktails from "../components/SavedCocktails";

const MyList = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedCocktails, setSavedCocktails] = useState([]);

  const handleGoogleLogin = () => {
    setIsAuthenticated(true);

    setUserName("Anthonyy");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName("");
  };

  const handleAddCocktail = (newCocktail) => {
    setSavedCocktails([...savedCocktails, newCocktail]);
    setShowAddModal(false);
  };

  return (
    <div>
      <Header
        title="My List"
        userName={userName}
        onGoogleLogin={handleGoogleLogin}
        onLogout={handleLogout}
      />
      {isAuthenticated ? (
        <div>
          {/* MyList functionality */}
          <h2>Welcome, {userName}!</h2>
          <button onClick={() => setShowAddModal(true)}>Add Cocktail</button>
          <SavedCocktails cocktails={savedCocktails} />
          <button onClick={handleLogout}>Logout</button>
          {showAddModal && <AddCocktailModal onSave={handleAddCocktail} />}
        </div>
      ) : (
        <div>
          <h3>Welcome! Please sign in with Google to access your list.</h3>
        </div>
      )}
    </div>
  );
};

export default MyList;
