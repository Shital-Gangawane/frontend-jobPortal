import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Companies() {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 1
    //   };
  return (
    <div>
       
      <div className="mx-auto d-flex flex-row mb-3 mt-5 ms-5 companies-slider">
      {/* <Slider {...settings}> */}
        <div className="p-2 ">
            
          <img
            src="./img/Tata-Steel-Downstream-Products.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <img
            src="./img/reliance-Fresh.jpg"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <img
            src="./img/amazon-Seller-Central.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <img
            src="./img/Zomato.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <img
            src="./img/Wipro-Infotech-Limited.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>
        <div className="p-2">
          <img
            src="./img/Infosys.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <img
            src="./img/ITC-Limited-Foods-Division.jpg"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>
        <div className="p-2">
          <img
            src="./img/Tata-Steel-Downstream-Products.webp"
            className="img-fluid d-block w-100"
            alt="image not found"
          />
        </div>
        {/* </Slider> */}
      </div>
      
    </div>
  );
}

export default Companies;
