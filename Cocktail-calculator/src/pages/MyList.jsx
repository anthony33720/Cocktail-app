import React, { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AddCocktailModal from "../components/AddCocktailModal";
import SavedCocktails from "../components/SavedCocktails";

const MyList = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [savedCocktails, setSavedCocktails] = useState([]);

  const handleLogin = (credentials) => {
    if (
      credentials.username === "anthony" &&
      credentials.password === "password"
    ) {
      setIsAuthenticated(true);
    } else {
      console.log("Authentication failed");
    }
  };

  const handleRegister = (userData) => {
    console.log("Registration data:", userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
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
          {/* Login or Register form */}
          {isLoginFormVisible ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <button onClick={() => setIsLoginFormVisible(true)}>Login</button>
          )}
          {isRegisterFormVisible ? (
            <RegisterForm onSubmit={handleRegister} />
          ) : (
            <button onClick={() => setIsRegisterFormVisible(true)}>
              Register
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MyList;
