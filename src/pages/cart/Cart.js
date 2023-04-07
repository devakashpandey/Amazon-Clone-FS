import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmiOption from "../../components/emi accordian/EmiOption";
import {
  decrementQty,
  deleteItem,
  incrementQty,
} from "../../redux/AmazonSlice";

import EmptyCart from "../../components/empty cart/EmptyCart";

const Cart = () => {
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products]);

  return (
    <>
      <div className="w-full bg-gray-100 p-4 mt-4">
        {products.length > 0 ? (
          <div className="w-full mx-auto h-auto grid grid-cols-4 gap-6">
            <div className="w-full h-full bg-white col-span-3">
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
                          className=" w-full h-44 npm startobject-contain "
                          src={item.image}
                          alt="productImg"
                        />
                      </div>
                      <div className="w-3/5">
                        <h2 className="font-medium text-[1.5rem]">
                          {item.title}
                        </h2>
                        <p className="text-md pr-30 mb-1 mt-1 ">
                          {item.description}
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
                            onClick={() => dispatch(decrementQty(item.id))}
                            className="cursor-pointer bg-gray-200 px-1.5 rounded-md hover:bg-gray-300
                      duration-200"
                          >
                            -
                          </p>
                          <p>{item.quantity}</p>
                          <p
                            onClick={() => dispatch(incrementQty(item.id))}
                            className="cursor-pointer bg-gray-200 px-1.5 rounded-md hover:bg-gray-300
                      duration-200 0"
                          >
                            +
                          </p>
                        </div>
                        <button
                          onClick={() => dispatch(deleteItem(item.id))}
                          className="text-[#5F8FA7] py-1 px-4 mt-4 bg-gray-100 rounded-md cursor-pointer
                     hover:bg-gray-200 active:bg-gray-300 duration-200 drop-shadow-md text-sm"
                        >
                          Delete
                        </button>{" "}
                        <span className="px-3 text-gray-400">|</span>
                        <button
                          className="text-[#5F8FA7] py-1 px-4 mt-4 bg-gray-100 rounded-md cursor-pointer
                     hover:bg-gray-200 active:bg-gray-300 duration-200 drop-shadow-md text-sm"
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
            <div className="w-full h-72 bg-white items-center p-5  ">
              <div>
                <p className="flex gap-2 items-start text-sm mt-2 mb-2">
                  <span className="bg-white text-green-600">
                    <CheckCircleIcon />
                  </span>
                  Part of your order qualifies for FREE Delivery. Select this
                  option at checkout. Details
                </p>
              </div>
              <div>
                <p className="font-medium text-lg py-2 items-center justify-between font-titleFont tracking-wide">
                  Subtotal ({products.length > 0 ? products.length : 0} items):{" "}
                  <span className="text-2xl font-semibold">${totalPrice}</span>
                </p>
                <div className="mb-1">
                  <input type="checkbox" />
                  &nbsp; This order contains a gift
                </div>
              </div>
              <button
                className="w-full font-titleFont bg-yellow-300 border
                    border-yellow-400 hover:bg-yellow-400
                    duration-200 py-1.5 text-sm rounded-md mt-3"
              >
                Proceed to Buy
              </button>
              <div className="py-4">
                <EmiOption />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCart />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
