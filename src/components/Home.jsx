import { useState } from "react";
import Book from "./Book";
import { AiOutlineClose } from "react-icons/ai";

function Home({ books, deleteBook }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBook, setActiveBook] = useState(null);

  const handleModal = (id) => {
    setIsModalOpen(!isModalOpen);
    setActiveBook(books.find((book) => book.id === id));
  };

  if (books.length === 0) {
    return (
      <div className="container mx-auto my-4">
        <h1 className="text-center text-4xl">
          😟 There are no books in Library 😟
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-4">
      <ul className="flex justify-between items-center flex-wrap">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              book={book}
              deleteBook={deleteBook}
              isModalOpen={isModalOpen}
              handleModal={handleModal}
            />
          );
        })}
      </ul>

      {isModalOpen ? <Modal book={activeBook} handleModal={handleModal} /> : ""}
    </div>
  );
}

function Modal({ book, handleModal }) {
  return (
    <div>
      <div className="modal">
        <div className="flex justify-end items-center">
          <button onClick={handleModal}>
            <AiOutlineClose className="icon hover:text-red-500" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="basis-[30%]">
            <img
              src={book.image}
              alt={book.title}
              className="w-full min-h-[300px] object-cover"
            />
          </div>
          <div className="basis-[60%] w-full h-[400px] overflow-scroll">
            <h3 className="my-2">Name:{book.title}</h3>
            <p className="my-2">Author: {book.author}</p>
            <p className="my-2">Description: {book.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
