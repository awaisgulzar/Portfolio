import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/fb.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    facebook page
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    facebook clone page
                  </h1>
                  <p className="leading-relaxed">
                    This is the facebook clone page i made this project for...
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="bg-white absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/food.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Food Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The online Food Website
                  </h1>
                  <p className="leading-relaxed">
                    This is the online food website for those who order the
                    food...
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/ec.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Shoes Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Order Shoes
                  </h1>
                  <p className="leading-relaxed">
                    This is the shoes website order the shoes online{" "}
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/earning.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Online earning website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Earning
                  </h1>
                  <p className="leading-relaxed">
                    This is the online earning webiste i made this website...
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/cms.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Bootstrap Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Bootstrap Website
                  </h1>
                  <p className="leading-relaxed">
                    This is the bootstrap website i made this for my
                    practices...
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hover:cursor-pointer ">
              <div className="flex relative  ">
                <Image
                  width={360}
                  height={601}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src="/assets/picture/earn.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Earn Online
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Online Earning
                  </h1>
                  <p className="leading-relaxed">
                    This is also made for online earning for students who...
                  </p>
                  <p className="leading-relaxed text-blue-300 hover:underline">
                    view project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
