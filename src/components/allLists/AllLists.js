import React from "react";
import "./AllList.css";

const AllLists = ({ show }) => {
  return (
    <>
      {show && (
        <div>
          <ul
            className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white
           border-[1px] border-amazon_blue text-black flex-col gap-1 z-50 text-sm"
          >
            <li className="list-item">All Departments</li>
            <li className="list-item">Arts & Crafts</li>
            <li className="list-item">AutoMotive</li>
            <li className="list-item">Baby</li>
            <li className="list-item">Beuty & Personal Care</li>
            <li className="list-item">Books</li>
            <li className="list-item">Boy's Fashion</li>
            <li className="list-item">Computer</li>
            <li className="list-item">Deals</li>
            <li className="list-item">Digital Music</li>
            <li className="list-item">Electronics</li>
            <li className="list-item">Girls's Fashion</li>
            <li className="list-item">Health & Household</li>
            <li className="list-item">Home & Kitchen</li>
            <li className="list-item">Indrustial & Scientific</li>
            <li className="list-item">Kindle Store</li>
            <li className="list-item">Luggage</li>
            <li className="list-item">Men's Fashion</li>
            <li className="list-item">Movies & TV</li>
            <li className="list-item">Music, CDs & Vinyl</li>
            <li className="list-item">Pet Supplies</li>
            <li className="list-item">Prime Video</li>
            <li className="list-item">Software</li>
            <li className="list-item">Sports & Outdoor</li>
            <li className="list-item">Tools & Home Improvement</li>
            <li className="list-item">Toys & Games</li>
            <li className="list-item">Video Games</li>
            <li className="list-item">Women's Fashion</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default AllLists;
