import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import gofood from "../assets/images/GoFood.png";
import grabfood from "../assets/images/GrabFood.png";
import shopeefood from "../assets/images/ShopeeFood.png";

const Order = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleOrderNow = (service) => {
    navigate(`/home/order-now/${service}`);
  };

  return (
    <>
      <div className="mx-4 md:mx-28 mt-[150px] mb-10 h-auto">
        <div className="flex items-center w-full h-auto px-4 md:px-6 border-2 border-[#0047AB] rounded-xl">
          <div
            onClick={handleBack}
            className="flex items-center text-[#FF0000] border-r-2 border-r-[#0047AB] px-2 py-2 mr-4 cursor-pointer"
          >
            <IoIosArrowBack className="w-5 h-5 mr-1" />
            Back
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Breadcrumbs />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <h2 className="text-2xl md:text-3xl font-semibold relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/4 after:border-b-4 after:border-red-500 px-0 pb-1">
            Order Now On:
          </h2>
        </div>
        <div className="flex flex-wrap md:flex-row justify-center mt-16 gap-5 lg:gap-36 w-auto h-auto">
          <div className="flex flex-col gap-8 w-[180px] md:w-[200px] h-auto">
            <img
              className="w-full md:w-[200px] h-auto md:h-[200px]"
              src={grabfood}
              alt="GrabFood"
            />
            <button
              onClick={() => handleOrderNow("GrabFood Outlet")}
              className="self-center px-3 py-3 w-full md:w-28 h-auto text-white rounded-lg bg-[#0047AB]"
            >
              Order Now
            </button>
          </div>
          <div className="flex flex-col gap-8 w-[180px] max-lg:self-end md:w-[200px] h-auto">
            <img
              className="w-full md:w-[200px] h-auto md:h-[200px]"
              src={gofood}
              alt="GoFood"
            />
            <button
              onClick={() => handleOrderNow("GoFood Outlet")}
              className="px-3 py-3 w-full md:w-28 h-auto text-white rounded-lg bg-[#0047AB] self-center"
            >
              Order Now
            </button>
          </div>
          <div className="flex flex-col gap-8 w-[180px] md:w-[200px] h-auto">
            <img
              className="w-full md:w-[200px] h-auto md:h-[200px]"
              src={shopeefood}
              alt="ShopeeFood"
            />
            <button
              onClick={() => handleOrderNow("ShopeeFood Outlet")}
              className="px-3 py-3 w-full md:w-28 h-auto text-white rounded-lg bg-[#0047AB] self-center"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
