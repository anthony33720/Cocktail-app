import React from "react";

const AuthenticationButton = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthenticationButton;
