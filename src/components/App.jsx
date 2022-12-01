import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import Home from "./Home";
import Navbar from "./Navbar";

const getItemFromLocalStorage = () => {
  const books = localStorage.books
    ? JSON.parse(localStorage.getItem("books"))
    : [];
  return books;
};

function App() {
  const [books, setBooks] = useState(getItemFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (
    <div className="text-gray-700">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home books={books} deleteBook={deleteBook} />}
        />
        <Route path="/add_book" element={<AddBook addBook={addBook} />} />
      </Routes>
    </div>
  );
}
export default App;
