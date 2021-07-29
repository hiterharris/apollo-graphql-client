import React, { useEffect, useState } from "react";
import { useData } from "./hooks/useData";

const App = () => {
  const { users } = useData();
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    setUsersList(users.users);
  }, [users]);

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className="users" style={{ textDecoration: "underline" }}>
        <h1>Users</h1>
        {usersList?.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.username}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
