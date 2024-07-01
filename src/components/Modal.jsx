import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
    <div className="bg-white rounded-lg shadow-lg max-w-md sm:max-w-lg w-full relative overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <IoCloseOutline className="w-7 h-7 text-black" />
      </button>
      <div className="overflow-y-auto max-h-[80vh] scrollbar-hide">
        <img src={item.image} alt={item.title} className="w-full" />
        <div className="mx-4 my-2">
          <div className="flex gap-2">
            <h2 className="text-2xl font-bold flex items-center">
              {item.title}
              {item.isNew && (
                <span className="ml-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                  New
                </span>
              )}
            </h2>
          </div>
          <p className="mt-2">{item.description}</p>
          <p className="mt-4 text-red-500 font-bold">{item.price}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
