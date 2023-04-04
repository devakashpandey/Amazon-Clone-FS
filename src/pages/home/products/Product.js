import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

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
      <div className="max-w-screen-3xl max-auto grid grid-cols-4 gap-8 px-5">
        {myProductData?.map((item) => (
          <div
            className="bg-white h-auto border-[1px] py-6 hover:border-transparent
            hover:shadow-testShadow duration-200 relative "
            key={item.id}
          >
            <div className="flex flex-col gap-4 cursor-pointer">
              <div className="w-full h-auto flex items-center justify-center">
                <img
                  className="w-52 h-64 object-contain"
                  src={item.image}
                  alt="productImage"
                />
              </div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
