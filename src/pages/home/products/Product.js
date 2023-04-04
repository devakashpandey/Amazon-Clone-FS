import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div className="max-w-screen-2xl max-auto grid grid-cols-4 gap-10 px-5">
        {myProductData?.map((item) => (
          <div
            className="bg-white h-auto border-[1px] py-6 hover:border-transparent
            hover:shadow-textShadow duration-200 relative cursor-pointer flex flex-col gap-4"
          >
            <div className="w-full flex items-center justify-center">
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="productImage"
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
