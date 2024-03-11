import React, { useState } from "react";
import Header from "../components/Header";
import AddCocktailModal from "../components/AddCocktailModal";
import SavedCocktails from "../components/SavedCocktails";
import GoogleLoginButton from "../components/GoogleLoginButton"; // Import GoogleLoginButton component

const MyList = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedCocktails, setSavedCocktails] = useState([]);

  const handleLogin = (response) => {
    // Handle Google login response
    console.log("Google login response:", response);
    setIsAuthenticated(true); // Set isAuthenticated to true after successful login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
  };

  const handleAddCocktail = (newCocktail) => {
    setSavedCocktails([...savedCocktails, newCocktail]);
    setShowAddModal(false);
  };

  return (
    <div>
      <Header title="My List" />
      {isAuthenticated ? (
        <div>
          {/* MyList functionality */}
          <h2>Welcome, Anthony!</h2>
          <button onClick={() => setShowAddModal(true)}>Add Cocktail</button>
          <SavedCocktails cocktails={savedCocktails} />
          <button onClick={handleLogout}>Logout</button>
          {showAddModal && <AddCocktailModal onSave={handleAddCocktail} />}
        </div>
      ) : (
        <div>
          <h3>
            Welcome, in this part you will be able to create your own list,
            menus and create your own recipes. Sign in or create an account to
            have the full potential of this app.
          </h3>
          {/* Google login button */}
          <GoogleLoginButton onSuccess={handleLogin} onFailure={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default MyList;
