import React from "react";
import { CgCloseO } from "react-icons/cg";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <div>
      {orderPopup && (
        <div className="top-0 left-0 z-50 fixed bg-black/50 backdrop:blur-sm w-screen h-screen">
          <div className="top-1/2 left-1/2 fixed bg-white hover:bg-opacity-50 opacity-100 p-4 rounded-xl w-[300px] transition -translate-x-1/2 -translate-y-1/2 duration-500 hover:scale-110">
            {/* Header sec */}
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-center">Everything you want is here in <span className="hover:text-primary transition-all duration-500 cursor-pointer hover:scale-110">Foody Zone</span>  </h1>
              </div>
              <div className="">
                <CgCloseO className="text-2xl -translate-y-5 translate-all translate-x-2 duration-500 cursor-pointer ease-in-out hover:scale-110" onClick={()=>{setOrderPopup(false)}}/>
              </div>
            </div>
            {/* Body sec */}
            <div className="mt-4">
                <input type="text" required placeholder="Type Your Name " className="focus:border-gray-400 bg-gray-300 mb-4 px-4 py-1 rounded-xl focus:rounded-full w-full text-center hover:translate-all duration-500 hover:duration-300" />
                <input type="number"  required placeholder="+201********* " className="focus:border-gray-400 bg-gray-300 mb-4 px-4 py-1 rounded-xl focus:rounded-full w-full text-center hover:translate-all duration-500 hover:duration-300" />
                <input type="text" required placeholder="Drop Your Adress" className="focus:border-gray-400 bg-gray-300 mb-4 px-4 py-1 rounded-xl focus:rounded-full w-full text-center hover:translate-all duration-500 hover:duration-300" />
            <div className="">
                <button onClick={alert("Your request will be reviewed. Please leave some details. Have a nice day.🖤")} className="justify-center items-center bg-primary opacity-70 hover:opacity-100 px-4 py-1 rounded-3xl hover:rounded-full text-center transform translate-all translate-x-24 duration-500 hover:scale-110">
                    Submit!
                </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
