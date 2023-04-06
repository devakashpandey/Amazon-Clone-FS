import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  return (
    <>
      <div className="w-full bg-gray-100 p-4">
        <div className="container mx-auto h-auto grid grid-cols-5 gap-7">
          <div className="w-full h-full bg-white col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] py-5 px-5">
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h4 className="text-gray-500 font-medium text-lg">Price</h4>
            </div>
            {/* Products item Start here */}
            <div>
              {products.map((item) => (
                <div
                  className="w-full border-b-2 p-8 flex items-center gap-6"
                  key={item.id}
                >
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="w-1/5">
                      <img
                        className=" w-full h-44 object-contain "
                        src={item.image}
                        alt="productImg"
                      />
                    </div>
                    <div className="w-3/5">
                      <h2 className="font-medium text-[1.5rem]">
                        {item.title.substring(0, 45)}...
                      </h2>
                      <p className="text-md pr-44 mb-1 mt-1 ">
                        {item.description.substring(0, 150)}....
                      </p>
                      <p>
                        Price{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div
                        className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-28
                     p-1.5 text-center drop-shadow-md rounded-md mt-2"
                      >
                        <p>Qty:</p>
                        <p
                          className="cursor-pointer bg-gray-200 px-1.5 rounded-md hover:bg-gray-300
                      duration-200"
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          className="cursor-pointer bg-gray-200 px-1.5 rounded-md hover:bg-gray-300
                      duration-200 0"
                        >
                          +
                        </p>
                      </div>
                      <button
                        className="text-[#74a8c2] py-1 px-4 mt-4 bg-gray-100 rounded-md cursor-pointer
                     hover:bg-gray-200 active:bg-gray-300 duration-300 drop-shadow-md text-sm"
                      >
                        Delete
                      </button>{" "}
                      <span className="px-3 text-gray-400">|</span>
                      <button
                        className="text-[#74a8c2] py-1 px-4 mt-4 bg-gray-100 rounded-md cursor-pointer
                     hover:bg-gray-200 active:bg-gray-300 duration-300 drop-shadow-md text-sm"
                      >
                        Save for later
                      </button>{" "}
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Products item End here */}
          </div>
          <div className="w-full h-full bg-white"> </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
