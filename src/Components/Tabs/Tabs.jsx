import React, { useState } from "react";
import { Productiondata } from "../Data/Data";

const Tabs = ({ handleOrderPopup }) => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Shawerma", "Burger", "Pizza", "Pasta", "Casserole"];
  const filteredCards =
    activeTab === "All"
      ? Productiondata
      : Productiondata.filter((card) => card.category === activeTab);

  return (
    <div>
      <div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="my-12 md:my-16 container"
      >
        {/* tabs section */}
        <div className="flex flex-wrap justify-center sm:justify-center gap-4 mb-4 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all duration-500 py-2 px-4 rounded-lg ${
                activeTab === tab
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 text-gray-900 hover:bg-secondery hover:scale-110 hover:shadow-md hover:rounded-2xl"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* tab card section */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {filteredCards.map((card) => (
            <div className="space-y-2 shadow-lg hover:shadow-2xl p-4 border rounded-sm hover:rounded-xl text-bold transition-all duration-500 hover:scale-105" key={card.id}>
              <img
                src={card.image}
                alt=""
                className="shadow-xl rounded-lg hover:rounded-2xl translate-all duration-500 hover:scale-105"
              />
              <p className="ml-4 text-bold text-left transform translate-y-5">{card.title}</p>
              <p className="ml-4 text-left transform translate-y-5">{card.category}</p>
              <p className="ml-4 text-left text-red-700 transform translate-y-5">{card.price}</p>
              <div className="">
                <div
                  onClick={handleOrderPopup} 
                  className="relative justify-end items-end bg-gray-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondery mr-2 ml-auto py-2 rounded-full w-24 h-10 text-white transform -translate-y-12 translate-all duration-500 cursor-pointer ease-in-out hover:scale-110"
                >
                  <span className="flex justify-center items-center">Order Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
