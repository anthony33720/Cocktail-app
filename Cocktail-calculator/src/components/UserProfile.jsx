import React from "react";

const UserProfile = ({ username, email }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;