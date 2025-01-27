import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 shadow-md">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-pointer transition-transform duration-500 ease-in-out rounded"
      />
      <div className="text-sm flex justify-between items-center">
        <h2 className="truncate">{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal truncate">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-sm">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="p-2 w-[100px] text-white bg-blue-500 hover:bg-green-600 rounded-lg text-sm text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
