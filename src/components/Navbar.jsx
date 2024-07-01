import React, { useState, useEffect } from "react";
import logo from "../assets/images/image 22.svg";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const nav = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Eatery",
    path: "/eatery",
  },
  {
    display: "News",
    path: "/news",
  },
  {
    display: "About Us",
    path: "/about-us",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const activeIndex = nav.findIndex((e) => e.path === pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
 <nav className={`fixed top-0 left-0 w-full z-10 bg-[#004687] transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex justify-between items-center h-20 w-full px-6 md:px-28">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 h-auto" />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
          </button>
        </div>
        <ul className={`fixed top-0 left-0 w-full h-full bg-[#004687] flex flex-col justify-center items-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:bg-transparent md:w-auto md:h-auto md:transform-none`}>
          <button onClick={toggleMenu} className="absolute top-2 right-2 text-white md:hidden">
            <IoClose className="w-8 h-8" />
          </button>
          {nav.map((e, i) => (
            <li key={i} className={`p-4 text-xl md:text-base ${i === activeIndex ? "text-gray-400" : "text-white"}`}>
              <Link to={e.path} onClick={() => setIsOpen(false)}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
