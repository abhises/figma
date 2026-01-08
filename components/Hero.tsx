import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-[#FFFFFF] p-2 h-20 lg:h-32 w-screen flex  justify-center ">
        <p className="text-3xl sm:text-6xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">Train Hard.</span>
          <span className="sm:inline text-[#808DFD] ">Live Better</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#E9ECFF] ">
        <div className="relative sm:col-span-9 ">
          <Image src="/Image.png" alt="Hero Image" height={500} width={1200} />
        </div>

        <div className="sm:col-span-3 p-4">
          <h1 className="text-4xl font-bold mb-4"> FOR THE COMMITED</h1>
          <p className="mt-10 lg:mt-50 mb-7">
            Train like an athlete with our top-tier equipment and expert
            programming.Weather you are building muscles or Prs, we help you
            pass limits
          </p>
          <Link href="/about" className="ml-3">
            {" "}
            ABOUT US
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#E9ECFF]">
        {/* Image */}
        <div className="order-1 lg:order-3 lg:col-span-4">
          <Image
            src="/lower.png"
            alt="Hero Image"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        {/* Text Block 1 */}
        <div className="order-2 lg:order-1 lg:col-span-4 p-4 border-r-2 border-black flex flex-col">
          <h1 className="text-4xl font-bold mb-4">GUIDED BY EXPERTS</h1>

          <p className="mt-auto mb-10">
            Our certified trainers are here to support and motivate you every
            step of the way. Train like an athlete with our top-tier equipment
            and expert programming. Whether you are building muscles or PRs, we
            help you push limits.
          </p>
        </div>

        {/* Text Block 2 */}
        <div className="order-3 lg:order-2 lg:col-span-4 p-4 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">DYNAMIC OPEN GYM</h1>

          <p className="mt-auto mb-10">
            Our certified trainers are here to support and motivate you every
            step of the way. Train like an athlete with our top-tier equipment
            and expert programming. Whether you are building muscles or PRs, we
            help you push limits.
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] p-2 h-32 w-screen flex  justify-center ">
        <p className="text-5xl sm:text-6xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">JOIN THE </span>
          <span className="sm:inline text-[#808DFD] ">COMMUNITY</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 bg-[#E9ECFF] ">
        <div className="order-2 lg:order-1 lg:col-span-3 md:col-span-1 ">
          <h1 className="text-3xl font-semibold mb-4 mt-4 ml-4">
            {" "}
            DISCOVER YOUR POTENTIAL
          </h1>
          <div className="flex flex-col">
            <div className="mt-6 border-t-black border-t-2 p-4">
              <h1 className="text-xl font-bold">EXPERT COACHING</h1>
              <p>
                Our expert coaches guide you through every step of your fitness
                journey.
              </p>
            </div>
            <div className="border-t-black border-t-2 p-4">
              {" "}
              <h1 className="text-xl font-bold">RESULT DRIVEN PROGRAMS</h1>
              <p>
                Our expert coaches guide you through every step of your fitness
                journey.
              </p>
            </div>
            <div className="border-t-black border-t-2 p-4">
              {" "}
              <h1 className="text-xl font-bold">A SUPPORTIVE TRIBE</h1>
              <p>
                Our expert coaches guide you through every step of your fitness
                journey.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-9  md:col-span-1">
          <Image
            src="/deadlift.png"
            alt="Hero Image"
            height={500}
            width={1200}
          />
        </div>
      </div>
      <div
        className="bg-[#808DFD] w-full min-h-60 sm:min-h-75 lg:min-h-100
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

export default Hero;
