import React, {useState, useEffect} from 'react';
import './App.css';
import { useData } from './helpers/useData';

const App = () => {
const { data } = useData();
const [books, setBooks] = useState();

useEffect(() => {
  data.books.map(books => setBooks(books));
}, [data]);

console.log('data: ', data.books);
console.log('books: ', books);

  return (
    <div className="App">
       <h1>Books</h1>
       {books.title} by {books.author}
    </div>
  );
};

export default App;
