import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-50">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href={"#"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src={"/assets/logo/logo.png"}
              alt="hero"
              width={100}
              height={100}
              className="w-[45px] "
            />
            <span className="ml-3 text-xl hover:text-red-200 ">Jazzi Tech</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
            © 2024 JazziTech —
            <Link
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @M. Awais
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="#" className="text-gray-500 text-xl hover:text-red-200">
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://www.instagram.com/m_awais_jani/"
              target="_blank"
              className="ml-3 text-gray-500 text-xl hover:text-red-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com/awaisgulzar"
              target="_blank"
              className="ml-3 text-gray-500 text-xl hover:text-red-200"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="ml-3 text-gray-500 text-xl hover:text-red-200"
            >
              <FaLinkedinIn />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
