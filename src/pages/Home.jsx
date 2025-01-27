import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignInClick = () => setIsModalOpen(true); // Open Modal
  const handleCloseModal = () => setIsModalOpen(false); // Close Modal

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData)); // Save in localStorage
    alert("Data Saved in LocalStorage!");
    setFormData({ email: "", password: "" }); // Clear form
    setIsModalOpen(false); // Close Modal
  };

  return (
    <>
      {/* Pass Sign In click handler to Navbar */}
      <Navbar onSignInClick={handleSignInClick} />
      <CategoryMenu />
      <FoodItems />
      <Cart />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 underline"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Login"}
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
