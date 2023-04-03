import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [myProductData, setMyProductData] = useState("");

  const productData = async () => {
    let data = await axios.get("https://fakestoreapi.com/products");
    setMyProductData(data.data);
  };

  useEffect(() => {
    productData();
  }, []);

  //   console.log(myProductData);

  return (
    <>
      <div>
        {myProductData.map((item) => (
          <div>
            <img src={item.image} alt="img" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
