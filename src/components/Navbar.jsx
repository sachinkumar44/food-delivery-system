import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = ({ onSignInClick }) => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Food Delivery System</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[20vw]"
        />
        {/* Sign In Button */}
        <button
          onClick={onSignInClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-none"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
