import React from "react";
import Banner from "./banner/Banner";
import Product from "./products/Product";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="w-full -mt-36 mdl:-mt-60 lgl:-mt-80 py-10">
        <Product />
      </div>
    </>
  );
};

export default Home;
