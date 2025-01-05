import React from "react";
import StoreImg from "../../assets/Website/store.png";
import gif from "../../assets/Website/mobile_bike.gif";

const Store = () => {
  return (
    <div>
      <div className="bg-white hover:bg-gray-200 py-14 rounded-t-3xl translate-all duration-700">
        <div className="container">
          <div className="items-center gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="space-y-6 mx-auto max-w-xl">
              <h1 className="font-semibold text-2xl text-center text-gray-700 sm:text-left sm:text-4xl">
                <span className="justify-center items-center text-center hover:text-primary">Foody Zone</span> <br /> is Now
                Available for <span className="hover:text-green-600 translate-all duration-500 cursor-pointer">Android</span> <span className="hover:text-red-600 translate-all duration-500 cursor-pointer">&</span> <span className="hover:text-gray-500 translate-all duration-500 cursor-pointer">IOS</span>
              </h1>
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="">
                    <img src={StoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                </a>
            </div>
            </div>
            <div className=""> <img className="mx-auto rounded-xl hover:rounded-3xl max-w-[500px] translate-all hover:translate-all duration-700 hover:duration-700 hover:scale-110" src={gif} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
