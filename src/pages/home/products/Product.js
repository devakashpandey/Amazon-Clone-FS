import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Product = () => {
  const [myProductData, setMyProductData] = useState([]);

  const productData = async () => {
    let data = await axios.get("https://fakestoreapi.com/products");
    setMyProductData(data.data);
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <>
      <div className="max-w-screen-3xl max-auto grid grid-cols-4 gap-8 px-6">
        {myProductData?.map((item) => (
          <div
            className="bg-white h-auto border-[1px] py-8 hover:border-transparent
            hover:shadow-testShadow duration-200 relative "
            key={item.id}
          >
            <div className="flex flex-col gap-4 cursor-pointer">
              <div className="w-full h-auto flex items-center justify-center relative">
                <img
                  className="w-52 h-64 object-contain"
                  src={item.image}
                  alt="productImage"
                />
                <ul
                  className="w-full h-32 bg-gray-100 absolute bottom-0 
                duration-700 flex flex-col items-center justify-center gap-4 font-titleFont px-2 border-1 border-r "
                >
                  <li className="productli">
                    Compare{" "}
                    <span>
                      <CompareArrowsIcon />
                    </span>
                  </li>
                  <li className="productli">
                    Add to Favorite{" "}
                    <span>
                      <FavoriteIcon />
                    </span>
                  </li>
                </ul>
              </div>
              <span className="text-xs capitalize italic top-2 right-2 absolute text-gray-500">
                {item.category}
              </span>
              <div className="px-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-titleFont text-lg">
                    {item.title.substring(0, 20)}
                  </h2>
                  <p className=" text-gray-600 font-semibold">${item.price}</p>
                </div>
                <div>
                  <p className="text-sm mt-1 mb-1">
                    {item.description.substring(0, 100)}...
                  </p>
                  <div className="text-[#ffa41c] ">
                    <span className="text-black text-sm">4.5 </span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <span className="text-[#187096] text-sm"> (13,321)</span>
                  </div>
                </div>
                <button
                  className="w-full font-titleFont bg-gradient-to-tr from-yellow-400
                   to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400
                    border-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500
                    duration-200 py-1 text-sm rounded-md mt-3"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
