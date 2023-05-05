import React from "react";
import { useNavigate } from "react-router-dom";
import emptyCartImg from "../../assets/emptyCart.png";
import { motion } from "framer-motion";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center items-center gap-8 p-10"
      >
        <div>
          <img
            className="rounded-lg mx-auto"
            src={emptyCartImg}
            alt="empty cart"
          />
        </div>
        <div className=" md:w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
          <h1 className="text-lg md:text-xl font-semibold">
            Your Cart feels lonely.
          </h1>
          <p className="text-sm text-center mt-2">
            Your Shopping cart lives to serve. Give it purpose - fill it with
            cloths, electronics, jewelery, books etc & make it happy.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full font-titleFont font-medium bg-yellow-300 border
                    border-yellow-400 hover:bg-yellow-400
                    duration-200 py-1.5 text-md rounded-md mt-3"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default EmptyCart;
