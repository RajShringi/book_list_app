import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBook({ addBook }) {
  const [book, setBook] = useState({
    image: "",
    title: "",
    author: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const notify = () => toast("Book is added in library 😀");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookToBeAdd = { id: new Date().getTime(), ...book };
    addBook(bookToBeAdd);
    notify();
    setBook({ image: "", title: "", author: "", summary: "" });
  };

  return (
    <div className="container mx-auto my-4">
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-lg mx-auto bg-white shadow-sm rounded-md"
      >
        <h1 className="text-3xl text-center font-light border-b py-2 my-2">
          Add Book
        </h1>

        <div>
          <span className="label">Image</span>
          <input
            type="text"
            className="input"
            placeholder="URL of Book Image"
            name="image"
            value={book.image}
            onChange={handleChange}
          />
        </div>

        <div>
          <span className="label">Title</span>
          <input
            type="text"
            className="input"
            placeholder="Name of Book"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <span className="label">Author</span>
          <input
            type="text"
            className="input"
            placeholder="Author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>

        <div>
          <span className="label">Summary</span>
          <textarea
            className="input"
            id=""
            cols="30"
            rows="7"
            placeholder="Summary"
            name="summary"
            value={book.summary}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <button className="inline-block my-4 bg-blue-600 text-white py-2 px-6 text-sm rounded-md hover:bg-cyan-500 duration-300">
            Add Book
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default AddBook;
