import React from "react";

import Slider from "react-slick";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import banner4 from "../../../assets/banner/banner4.jpg";
import banner5 from "../../../assets/banner/banner5.jpg";

const Banner = () => {
  // react slick caraousel setting
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full h-full relative">
          <Slider {...settings}>
            <div>
              <img src={banner1} alt="banner" />
            </div>
            <div>
              <img src={banner2} alt="banner" />
            </div>
            <div>
              <img src={banner3} alt="banner" />
            </div>
            <div>
              <img src={banner4} alt="banner" />
            </div>
            <div>
              <img src={banner5} alt="banner" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
