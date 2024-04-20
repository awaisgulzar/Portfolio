import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font  ">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            href={""}
            className="flex title-font font-medium items-center text-red-700 mb-4 md:mb-0"
          >
            <Image
              src={"/assets/logo/logo.png"}
              alt="hero"
              width={100}
              height={100}
              className="w-[55px]"
            />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#"} className="mr-5 hover:text-red-200">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-red-200">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-red-200">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-red-200">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-red-200">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv/cv.pdf" download={"cv.pdf"}>
            <button className="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0 ">
              Download Cv
              <IoCloudDownloadOutline className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
