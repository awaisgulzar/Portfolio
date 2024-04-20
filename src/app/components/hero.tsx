"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "App Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="bg-blue-700 w-[260px] h-[2px]"></div>
          <p className="mb-8 leading-relaxed">
            Hello! I am a passionate second-year student pursuing a degree in
            Computer Science. My journey into the world of technology began with
            a curiosity about how things work and a desire to create solutions
            that make a difference. With each project and class, I am
            continually expanding my knowledge and honing my skills to become a
            proficient and innovative computer scientist.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-black bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-left-top rounded  mx-auto h-[331px] w-[320px]"
            alt="hero"
            src={"/assets/picture/myimg.jpg"}
            width={320}
            height={330}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
