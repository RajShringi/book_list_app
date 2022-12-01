import { useState } from "react";
import { AiOutlineDelete, AiOutlineClose } from "react-icons/ai";

function Book({ book, deleteBook, isModalOpen, handleModal }) {
  return (
    <li className="bg-white p-3 rounded-lg shadow-lg basis-[25%] my-4 mx-4 animate-scaleUp">
      <div className="text-center my-2">
        <img
          src={book.image}
          className="object-contain mx-auto h-[250px]"
          alt={book.title}
        />
      </div>
      <div>
        <h3 className="mt-2 font-bold">{book.title}</h3>
        <p className="mb-2 text-gray-400 text-sm">{book.author}</p>
      </div>
      <p className="text-gray-500 text-sm my-2">
        {book.summary.substring(0, 150)}...
      </p>
      <div className="flex justify-between items-center">
        <button
          disabled={isModalOpen ? true : false}
          className="inline-block my-4 bg-blue-600 text-white py-2 px-6 text-sm rounded-md hover:bg-cyan-500 duration-300"
          onClick={() => handleModal(book.id)}
        >
          Read More
        </button>
        <button onClick={() => deleteBook(book.id)}>
          <AiOutlineDelete className="icon hover:text-rose-500" />
        </button>
      </div>
    </li>
  );
}

export default Book;
