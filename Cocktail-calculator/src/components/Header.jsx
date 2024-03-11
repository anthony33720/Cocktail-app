import React, { useState } from "react";
import Login from "./LoginForm";
import Register from "./RegisterForm";

const Header = ({ title }) => {
  const [showLogin, setShowLogin] = useState(true); // Initially show login button
  const [showRegister, setShowRegister] = useState(true); // Initially show register button
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in
  const [username, setUsername] = useState(""); // Username of logged-in user

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
    setShowLogin(false); // Hide login button after successful login
    setShowRegister(false); // Hide register button after successful login
  };

  const handleLogout = () => {
    setUsername(""); // Clear username
    setIsLoggedIn(false); // Set authentication status to false
    setShowLogin(true); // Show login button after logout
    setShowRegister(true); // Show register button after logout
  };

  return (
    <header>
      <h1>{title}</h1>
      {isLoggedIn ? ( // If user is logged in, display username instead of login/register buttons
        <p>Welcome, {username}!</p>
      ) : (
        <ul>
          {showLogin && (
            <li>
              <button onClick={handleLoginClick}>Login</button>
            </li>
          )}
          {showRegister && (
            <li>
              <button onClick={handleRegisterClick}>Register</button>
            </li>
          )}
        </ul>
      )}
      <img src="../public/martiniglass.jpeg" alt="" width={200} />
    </header>
  );
};

export default Header;
