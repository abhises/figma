import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#E9ECFF] w-full h-170 lg:h-125 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        <div>
          <Image
            src="/Vector.png"
            alt="Company Logo"
            width={220}
            height={200}
            className="cursor-pointer"
          />
        </div>

        <div className="lg:ml-50">
          <h1 className="text-3xl lg:text-6xl font-bold text-black">
            Primal Training
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 mt:20 lg:mt-45">
        <div className="col-span-4">
          <h1 className="text-xl font-bold mb-4">CONTACT</h1>
          <p className="text-gray-600">123 Fitness Street, Gym City</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
        </div>
        <div className="col-span-4 flex-col justify-center mt-10 lg:mt-0 lg:ml-40">
          <h1 className="text-xl font-bold mb-4">OPENING HOURS</h1>
          <p className="text-gray-600">Monday - Friday: 6AM - 10PM</p>
          <p className="text-gray-600">Saturday - Sunday: 8AM - 8PM</p>
        </div>
        <div className="col-span-4 flex lg:justify-end    mt-10 lg:mt-0 ">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">SOCIAL</h1>
            <p>Instagram</p>
            <p>X</p>
            <p>Linkedin</p>
            <p>Spotify</p>
          </div>

          {/* <p className="text-gray-600">Facebook | Twitter | Instagram</p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
