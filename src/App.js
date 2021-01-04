import React, { useEffect, useState } from 'react';
import './App.css';
import { useData } from './hooks/useData';

const App = () => {

  const { books, users } = useData();
  const [booksList, setBooksList] = useState();
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    setBooksList(books);
    setUsersList(users);
    console.log(booksList);
    console.log(usersList);
  }, [books, users]);



  
  return (
    <div className="App">
      <div>
        <h1>Books</h1>
        {booksList.books.map(book => {
          return (
            <div key={book.id}>
              <p>{book.title} by {book.author}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Users</h1>
        {usersList.users.map(user => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
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
