import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Food from "../assets/images/BookingService.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const BookingService = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1);
  };

  const { service } = useParams()

  return (
    <>
      <div className="mx-4 md:mx-28 mt-[150px] mb-10 w-auto h-auto">
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
        <div className="my-10">
          <h2 className="text-2xl md:text-3xl font-semibold relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[23%] after:border-b-4 after:border-red-500 px-0 pb-1">
            {service.charAt(0).toUpperCase() + service.slice(1)}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-5 w-full h-fit">
            <img className="w-full h-auto lg:order-last" src={Food} alt="" />
            <div className="flex flex-col">
              {[
                "Senopati, Petogongan",
                "Kebun Jeruk/Tanjung Duren",
                "Food Plaza PIK",
                "Kuningan - D'Kanteen",
                "Bintar, Thelapan Square",
                "Gading Derpong",
                "Cipete",
                "Menteng",
              ].map((location, index) => (
                <div
                  key={index}
                  className="flex flex-row w-full border-b-2 h-auto px-2 py-3 items-center justify-between font-semibold mt-2 first:mt-0"
                >
                  <p className="text-lg">{location}</p>
                  <div className="flex gap-3 items-center text-[#FF0000]">
                    <p>Purchase Here</p>
                    <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingService;
