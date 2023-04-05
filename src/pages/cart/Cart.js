import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  return (
    <>
      <div className="w-full bg-gray-100 p-4">
        <div className="container mx-auto h-96 grid grid-cols-5 gap-7">
          <div className="w-full h-full bg-white col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] py-5 px-5">
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h4 className="text-gray-500 font-medium">Price</h4>
            </div>
          </div>
          <div className="w-full h-full bg-white"> </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
