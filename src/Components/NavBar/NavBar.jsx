import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { TfiShoppingCartFull } from "react-icons/tfi";

export const NavBar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg">
      <div className="relative flex justify-between items-center mx-auto px-4 py-2 max-w-[1200px] h-[70px]">
        {/* Shopping Cart Button */}
        <button
          className="flex justify-center items-center bg-primary hover:bg-secondery rounded-full w-10 sm:w-12 h-10 sm:h-12 transition-all duration-500 hover:scale-110"
          onClick={() => alert("Wait for the next update from the Developer <3")}
        >
          <TfiShoppingCartFull className="w-5 h-5 text-white" />
        </button>

        {/* Logo Section */}
        <div className="flex justify-center items-center gap-2 mx-auto font-bold text-xl sm:text-2xl">
          <a href="#" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Foodly Zone"
              className="w-[60px] h-[60px] transition-all duration-700 hover:scale-125"
            />
            <p className="mr-7 hover:text-primary transition-all duration-500">
              Foody Zone
            </p>
          </a>
        </div>

        {/* Log In Button */}
        <button
          onClick={handleOrderPopup}  
          className="bg-primary hover:bg-secondery mx-auto rounded-md w-16 h-7 text-white transition-all duration-700 hover:scale-125"
        >
          <span className="flex justify-center items-center font-semibold">
            Log In
          </span>
        </button>

        {/* Icon for Small Screens */}
        <button
          className="sm:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex absolute sm:static top-[70px] sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent`}
        >
          <ul className="flex sm:flex-row flex-col gap-4 sm:gap-6 p-4 sm:p-0">
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:text-primary transition-all duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:text-[#ff1f1f] transition-all duration-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:text-[#ff1f1f] transition-all duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
