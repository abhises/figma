import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-[#FFFFFF] p-2 h-32 w-screen flex  justify-start ">
        <p className="text-3xl sm:text-7xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">ABOUT US</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  ">
        <div className="order-2 lg:order-1 md:col-span-1 lg:col-span-8  p-4 bg-[#808DFD]">
          <h1 className="text-4xl font-bold mb-4">
            {" "}
            TAP INTO YOUR PRIMAL POWER . FORGE A STRONGER YOU
          </h1>
          <h1 className="text-2xl md:mt-10 lg:mt-58">OUR VISION</h1>
          <p className="mt-10 mb-7">
            At Primal Fitness, our vision is to create a transformative fitness
            experience that empowers individuals to unlock their full potential.
            We strive to build a vibrant community where everyone feels
            inspired, supported, and motivated to achieve their health and
            wellness goals.
          </p>
        </div>
        <div className="order-1 lg:order-2 md:col-span-1  lg:col-span-4 ">
          <Image src="/ABOUT.jpg" alt="Hero Image" height={1200} width={1200} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  ">
        <div className=" md:col-span-1 lg:col-span-8 ">
          <Image src="/about2.jpg" alt="Hero Image" height={300} width={1200} />
        </div>
        <div className="md:col-span-1 lg:col-span-4  p-4 bg-[#E9ECFF]">
          <h1 className="text-4xl font-bold mb-4"> DYNAMIC OPEN GYM</h1>
          <p className="mt-30 lg:mt-140 mb-7">
            At Primal Fitness, our vision is to create a transformative fitness
            experience that empowers individuals to unlock their full potential.
            We strive to build a vibrant community where everyone feels
            inspired, supported, and motivated to achieve their health.
          </p>
        </div>
      </div>
      <div className="relative w-full bg-[#E9ECFF] h-60 md:h-150 lg:h-200">
        <Image src="/about3.png" alt="Hero Image" fill priority />
      </div>
      <div
        className="bg-[#E9ECFF] w-full min-h-60 sm:min-h-75 lg:min-h-100
                flex flex-col justify-center items-center
                px-4 sm:px-6 lg:px-10
                text-center border-b-2 border-black"
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black tracking-wide">
          WHAT WE BELIEVE IN
        </p>

        <h1
          className="mt-2 sm:mt-4
                 text-xl sm:text-3xl md:text-4xl lg:text-6xl
                 font-bold text-black leading-tight"
        >
          JOIN THE PRIMAL TRIBE TODAY
        </h1>

        <Link href="/reserve">
          <button
            className="mt-4 sm:mt-6
                       bg-[#808DFD] text-black
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

export default About;
