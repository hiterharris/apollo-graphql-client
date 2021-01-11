import React, { useEffect, useState } from 'react';
import './App.css';
import { useData } from './hooks/useData';

const App = () => {

  const { users } = useData();
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    setUsersList(users.users);
  }, [users]);

  console.log('usersList: ', usersList);

  return (
    <div className="App">      
      <div className="users">
        <h1>Users</h1>
        {usersList.map(user => {
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
