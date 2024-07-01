import React from 'react';
import logo from "../assets/images/image 22.svg";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#004687] text-white py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <img src={logo} alt="Manadong Logo" className="w-32 mb-2" />
          <p className="text-sm">&copy; 2023 PT Bogadong Anugerah Indonesia</p>
        </div>
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: <a href="mailto:Manadong@gmail.com" className="text-blue-300 underline ">Manadong@gmail.com</a></p>
          <p className='mt-2'>Telp: <a href="tel:+628111009115" className="text-blue-300 underline">+62-811-1009-115</a></p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://wa.me/yourwa" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Available On</h2>
          <ul className="space-y-3">
            <li><a href="https://www.grab.com/id/en/food/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Grab Food</a></li>
            <li><a href="https://www.gofood.co.id/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">GoFood</a></li>
            <li><a href="https://shopee.co.id/m/shopeefood" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Shopee Food</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
