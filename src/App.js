import React, {useState, useEffect} from 'react';
import './App.css';
import { useData } from './hooks/useData';

const App = () => {
const { data } = useData();
const [books, setBooks] = useState();

useEffect(() => {
  data.books.map(books => setBooks(books));
}, [data]);

  return (
    <div className="App">
       <h1>Books</h1>
       <p>{books.title} by {books.author}</p>
    </div>
  );
};

export default App;
