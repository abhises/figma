import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#E9ECFF] h-20.25 p-5 flex  justify-between  ">
      <div>
        {" "}
        <Image
          src="/Logo.png"
          alt="Company Logo"
          width={120}
          height={200}
          className="cursor-pointer"
        />
      </div>
      <div className="space-x-10 mr-10 hidden sm:block text-[17px] ">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/reserve">
          {" "}
          <button className="bg-[#808CFD] text-white px-4 py-2 rounded-sm cursor-pointer">
            RESERVE YOUR SPOT
          </button>
        </Link>
      </div>
      <div className=" sm:hidden">
        <Image
          src="/Union.png"
          alt="Menu Icon"
          width={20}
          height={20}
          className="cursor-pointer sm:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
