import React from "react";

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const UserList: React.FC = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
