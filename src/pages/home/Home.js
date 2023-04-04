import React from "react";
import Banner from "./banner/Banner";
import Product from "./products/Product";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="w-full -mt-36 lg:-mt-96 py-10">
        <Product />
      </div>
    </>
  );
};

export default Home;
