import React from "react";

function UserCard({ userName, userAge }) {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{userAge}</p>
    </div>
  );
}

export default UserCard;
