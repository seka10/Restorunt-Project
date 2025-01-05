import React, { useState } from "react";
import BgImg from "../../assets/main background.png";
import Mainbg from "../../assets/img.png";
import Mainbg0 from "../../assets/img3.png";
import Mainbg1 from "../../assets/img1.png";
import Mainbg3 from "../../assets/img2.png";
import Mainbg2 from "../../assets/img0.png";
const ImgList = [
  { id: 1, image: Mainbg },
  { id: 2, image: Mainbg0 },
  { id: 3, image: Mainbg1 },
  { id: 4, image: Mainbg2 },
  { id: 5, image: Mainbg3 },
];

export const Geniral = ({ handleOrderPopup }) => { 
  const [ImageId, setImageId] = useState(Mainbg);
  const [orderPopup, setOrderPopup] = useState(false);

  const bgImg = {
    backgroundImage: `url(${BgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <div
        className="flex justify-center items-baseline bg-gray-200 min-h-[550px] sm:min-h-[600px]"
        style={bgImg}
      >
        <div className="mt-20 pb-8 sm:pb-0 container">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text section */}
            <div className="flex flex-col justify-center items-center gap-4 order-2 sm:order-1 pt-12 sm:pt-0 text-center">
              <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl">
                Welcome to{" "}
                <span className="hover:text-primary transition-all duration-500 cursor-pointer">
                  Foody Zone
                </span>
              </h1>
              <p className="max-w-lg text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                dolorem doloribus assumenda recusandae? Consequuntur ducimus ea
                iusto aliquid quos voluptate, cum, nemo rerum dolor tempore
                sequi a minima ipsa autem.
              </p>
              <div className="flex">
                <div
                  onClick={handleOrderPopup} 
                  className="bg-gradient-to-r from-primary to-secondery mr-auto py-2 rounded-full w-24 h-10 text-white duration-500 cursor-pointer hover:scale-105"
                >
                  <span className="flex justify-center items-center">
                    Order Now
                  </span>
                </div>
              </div>
            </div>
            {/* image section */}
            <div className="relative flex justify-center items-center order-1 sm:order-2 min-h-[450px] sm:min-h-[450px]">
              {/* Main image */}
              <div className="flex justify-center items-center h-[500px] sm:h-[450px] overflow-hidden">
                <img
                  src={ImageId}
                  alt="Selected food item"
                  className="mx-auto w-[300px] sm:w-[400px] spin"
                />
              </div>
              {/* Image list */}
              <div className="lg:top-1/2 lg:-right-10 bottom-[0px] absolute flex lg:flex-col justify-center gap-4 bg-white/30 lg:py-2 rounded-full lg:-translate-y-1/2">
                {ImgList.map((item) => (
                  <img
                    src={item.image}
                    alt={`Food item ${item.id}`}
                    key={item.id}
                    onClick={() => setImageId(item.image)}
                    className="inline-block rounded-lg max-w-[50px] sm:max-w-[80px] h-[50px] sm:h-[80px] duration-500 cursor-pointer hover:scale-125 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geniral;
