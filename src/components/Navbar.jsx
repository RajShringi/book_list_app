import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="py-6 border-b bg-white">
      <ul className="flex justify-center items-center space-x-2">
        <li className="px-8 relative">
          <Link to="/" className="flex justify-center items-center  group ">
            <AiOutlineHome className="icon group-hover:text-sky-400" />
            <span className="icon-text text-sky-400 group-hover:scale-100">
              Home
            </span>
          </Link>
        </li>
        <li className="px-8 relative">
          <Link
            to="/add_book"
            className="flex justify-center items-center  group "
          >
            <AiOutlinePlus className="icon group-hover:text-green-400" />
            <span className="icon-text text-green-400 group-hover:scale-100">
              Add Book
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
