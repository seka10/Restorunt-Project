import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const OVC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="p-3 h-12 md:h-32 container"
    >
      <div className="grid grid-cols-5 bg-white/70 hover:bg-white shadow-lg hover:shadow-xl mx-auto md:p-8 hover:rounded-xl divide-x divide-slate-700 w-full md:max-w-[800px] translate-all lg:-translate-y-12 hover:translate-all duration-700 hover:duration-700 hover:scale-105">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-black/80 text-sm sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={234}
              suffix="+"
              duration={4}
            />
          </p>
          <p className="text-xs sm:text-md md:text-lg">Orders</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-black/80 text-sm sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={223}
              suffix="+"
              duration={4}
            />
          </p>
          <p className="text-xs sm:text-md md:text-lg">Customer</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-black/80 text-sm sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={61}
              suffix="+"
              duration={4}
            />
          </p>
          <p className="text-xs sm:text-md md:text-lg">Donation</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-black/80 text-sm sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={92}
              suffix="+"
              duration={4}
            />
          </p>
          <p className="text-xs sm:text-md md:text-lg">Delivered</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-black/80 text-sm sm:text-lg md:text-3xl">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              start={0}
              end={17}
              suffix="+"
              duration={4}
            />
          </p>
          <p className="text-xs sm:text-md md:text-lg">Ready</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OVC;
