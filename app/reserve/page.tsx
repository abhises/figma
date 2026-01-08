import React from "react";
import Link from "next/link";

const Reserve = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-[#FFFFFF] p-2 h-32 w-screen flex  justify-center ">
        <p className="text-3xl sm:text-7xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">BOOK A </span>
          <span className="sm:inline text-[#808DFD] ">SESSION</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#E9ECFF] ">
        <div className="col-span-4 h-100 w-full border-t-2 lg:border-2 border-b-2 border-black p-8">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold mb-4">STRENGTH</h1>
            <p className="border-b-2 border-black mt-10">Weeks day at 6AM</p>
            <p className="border-b-2 border-black mt-3">
              Weekends and Holiday at 8AM
            </p>
            <p className=" mt-3">Build a foundation of raw power</p>
            <button
              className="mt-10 sm:mt-20
                       bg-[#808DFD] text-black
                       px-4 sm:px-6 py-2 sm:py-3
                       rounded-sm text-sm sm:text-base
                       cursor-pointer w-full"
            >
              RESERVE YOUR SPOT
            </button>
          </div>
        </div>
        <div className="col-span-4 h-100 w-full border-t-2  border-b-2 border-black p-8">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold mb-4">CONDITIONING</h1>
            <p className="border-b-2 border-black mt-10">Weeks day at 6AM</p>
            <p className="border-b-2 border-black mt-3">
              Weekends and Holiday at 8AM
            </p>
            <p className=" mt-3">Build a foundation of raw power</p>
            <button
              className="mt-10 sm:mt-20
                       bg-[#808DFD] text-black
                       px-4 sm:px-6 py-2 sm:py-3
                       rounded-sm text-sm sm:text-base
                       cursor-pointer w-full"
            >
              RESERVE YOUR SPOT
            </button>
          </div>
        </div>
        <div className="col-span-4 h-100 w-full border-t-2 lg:border-2 border-b-2 border-black p-8">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-bold mb-4">COMMUNITY CLASSES</h1>
            <p className="border-b-2 border-black mt-10">Weeks day at 6AM</p>
            <p className="border-b-2 border-black mt-3">
              Weekends and Holiday at 8AM
            </p>
            <p className=" mt-3">Build a foundation of raw power</p>
            <button
              className="mt-10 sm:mt-20
                       bg-[#808DFD] text-black
                       px-4 sm:px-6 py-2 sm:py-3
                       rounded-sm text-sm sm:text-base
                       cursor-pointer w-full"
            >
              RESERVE YOUR SPOT
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-[#808DFD] w-full min-h-60 sm:min-h-75 lg:min-h-100
                flex flex-col justify-center items-center
                px-4 sm:px-6 lg:px-10
                text-center border-b-2 border-black"
      >
        <h1
          className="mt-2 sm:mt-4
                 text-xl sm:text-3xl md:text-4xl lg:text-6xl
                 font-bold text-black leading-tight"
        >
          PRIMAL PERSONAL TRAINING
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black tracking-wide mt-4">
          TAKE YOUR FITNESS TO THE NEXT LEVEL WITH OUR EXPERT PERSONAL
          TRAINING SESSIONS
        </p>

        <Link href="/reserve">
          <button
            className="mt-4 sm:mt-6
                       bg-[#E9ECFF] text-black
                       px-4 sm:px-6 py-2 sm:py-3
                       rounded-sm text-sm sm:text-base
                       cursor-pointer"
          >
            RESERVE YOUR SPOT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reserve;
