import React from "react";
import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import BgVid from "../../assets/Website/3296402-sd_426_226_25fps.mp4";
import Ban from "../../assets/Website/credit-cards.webp"
import { Link } from "react-router-dom";
const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Best Seller",
    link: "#",
  },
  {
    title: "Offers",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="relative py-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="top-0 right-0 z-[-1] absolute w-full h-full overflow-hidden object-cover"
      >
        <source src={BgVid} />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 bg-white/70 hover:bg-white/90 backdrop:blur-md py-5 rounded-tl-xl translate-all duration-700">
          <div className="px-4 py-8">
            <h1 className="flex items-center gap-3 font-bold text-justify text-xl sm:text-3xl sm:text-left">
              <img
                src={footerLogo}
                className="max-h-[60px] translate-all duration-700 hover:scale-150"
                alt=""
              />
              <p className="hover:text-primary translate-all duration-700 cursor-pointer">
                Foody Zone
              </p>
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              placeat corporis, quae facilis autem asperiores odio impedit sit
              dolores ex assumenda provident at fuga, rerum corrupti repellat
              totam quaerat nulla.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow className="hover:scale:125" />
              <p className="hover:text-secondery transform translate-all hover:translate-x-2 duration-300 cursor-pointer">
                Damitta, New Damitta
              </p>
            </div>
            {/* social contacts */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/XSeka10X"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/Sayed_X_ayman"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/seka10"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/xseka10x"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=201095463272"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/sayedayman92?mx=2"
                className="text-2xl hover:transform translate-all hover:-translate-y-2 duration-500 hover:scale-150"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* footer sec links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="mb-2 px-4 py-8">
              <h1>Important Links </h1>
              <ul>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Home
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Best Seller
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Contact ME
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  About
                </li>
              </ul>
            </div>
            <div className="mb-2 px-4 py-8">
              <h1>Important Links </h1>
              <ul>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Home
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Best Seller
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  Contact ME
                </li>
                <li className="mb-2 hover:text-secondery transform translate-all hover:translate-x-3 duration-300 cursor-pointer">
                  About
                </li>
              </ul>
            </div>
            <div className="mb-2 px-4 py-8">
              <h1 className="mb-3">Payment Methods </h1>
              <img className="w-[200%]" src={Ban} alt="" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-gray-300/50 bg-primary hover:bg-secondery py-5 border-t-2 rounded-b-xl text-center text-white hover:text-black transform -translate-y-10 translate-all duration-1000">|| @CopyRights 2025 All Right Reserved ||</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
