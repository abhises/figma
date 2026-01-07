import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="bg-[#FFFFFF] p-2 h-32 w-screen flex  justify-center ">
        <p className="text-3xl sm:text-7xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">Train Hard.</span>
          <span className="sm:inline text-[#808DFD] ">Live Better</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#E9ECFF] ">
        <div className="sm:col-span-9 ">
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
        <div className="order-2 lg:order-1 lg:col-span-4 p-4 border-r-2 border-black">
          <h1 className="text-4xl font-bold mb-4">GUIDED BY EXPERTS</h1>
          <p className="mt-6 mb-10">
            Our facilities are designed to help you reach your fitness goals,
          </p>
        </div>

        {/* Text Block 2 */}
        <div className="order-3 lg:order-2 lg:col-span-4 p-4">
          <h1 className="text-4xl font-bold mb-4">DYNAMIC OPEN GYM</h1>
          <p className="mt-6 mb-10">
            Our facilities are designed to help you reach your fitness goals,
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF] p-2 h-32 w-screen flex  justify-center ">
        <p className="text-3xl sm:text-7xl md:9xl font-bold ">
          <span className="sm:inline text-[#000000]">JOIN THE </span>
          <span className="sm:inline text-[#808DFD] ">COMMUNITY</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#E9ECFF] ">
        <div className="order-2 lg:order-1 sm:col-span-3 ">
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
        <div className="order-1 lg:order-2 sm:col-span-9 ">
          <Image
            src="/deadlift.png"
            alt="Hero Image"
            height={500}
            width={1200}
          />
        </div>
      </div>
      <div className="bg-[#808CFD] w-full h-100 flex flex-col justify-center items-center p-10">
        <p className="text-black mt-4">
          WHAT WE BELIEVE IN
        </p>

        <h1 className="text-3xl lg:text-6xl font-bold text-black ">
          JOIN THE PRIMARY TRIBE TODAY
        </h1>
        <button className="bg-white text-black px-4 py-2 rounded-sm mt-6 cursor-pointer">
          RESERVE YOUR SPOT
        </button>
      </div>
    </div>
  );
};

export default Hero;
