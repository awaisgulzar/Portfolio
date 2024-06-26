import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-left-top rounded  mx-auto h-[331px] w-[320px]"
              alt="hero"
              src={"/assets/picture/myimg.jpg"}
              width={320}
              height={330}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              As a computer science student, I am deeply passionate about
              unraveling the intricacies of technology and its applications in
              the modern world. From coding algorithms to designing innovative
              software solutions, I thrive on the challenges that come with
              exploring the ever-evolving realm of computer science.
            </p>
            <div className="flex justify-center">
              <a href="/assets/cv/cv.pdf" download={"cv.pdf"}>
                <button className="inline-flex text-gray-700 bg-blue-200 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">
                  View Cv
                </button>
              </a>
              <a href="#Contact">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-red-200 rounded text-lg">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
