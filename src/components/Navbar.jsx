import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
function Navbar() {
  return (
    <div className="py-6 border-b bg-white">
      <ul className="flex justify-center items-center">
        <a
          href="_"
          className="flex justify-center items-center relative group px-8"
        >
          <AiOutlineHome className="icon group-hover:text-sky-400" />
          <span className="icon-text text-sky-400 group-hover:scale-100">
            Home
          </span>
        </a>
        <a
          href="_"
          className="flex justify-center items-center relative group px-8"
        >
          <AiOutlinePlus className="icon group-hover:text-green-400" />
          <span className="icon-text text-green-400 group-hover:scale-100">
            Add Book
          </span>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
