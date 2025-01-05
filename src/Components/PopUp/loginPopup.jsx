import React from 'react'
import Imgbg from "../../assets/Website/restaurant-Login-Background.jpg"
const loginPopup = ({loginPopup,toggleLoginPopup}) => {
  return (
    <div>
        {
            loginPopup &&(
                <div className="top-0 z-50 fixed w-full h-full overflow-y-auto">
                    <div className="top-1/2 left-1/2 absolute bg-white shadow-sm rounded-2xl w-[90%] sm:w-auto transform -translate-x-1/2 -translate-y-1/2">
                        <div className="">
                            <div className="relative items-center gap-4 grid grid-cols-1 sm:grid-cols-2 sm:w-[600px] md:w-[800px]">
                                    {/* Log in Form Section */}
                                    <div className=""></div>
                                    {/* Image Form Section */}
                                    <div className="" /* style={}*/></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default loginPopup