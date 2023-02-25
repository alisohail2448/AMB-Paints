import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font mx-auto max-w-screen-xl  px-4 lg:px-8 lg:py-4 z-20 pb-12">
        <div className=" uppercase text-center flex justify-start items-center">
          <h3 className="border-r border-r-[#4d3286] pr-2">Our Products</h3>
          <h2 className="text-[#4d3286] font-bold text-2xl ml-2">
            What we do
          </h2>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-6 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Conventional Coating
                </h1>
                <p className="leading-relaxed mb-3 w-[100%]">
                We offer wide range of conventional coatings for varied industries. From specialized anti-corrosive primers, resin based primers, alkyd, phenolic and  glossy protective coating among others. 
                </p>
                <Link to="products/conventional" className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-6 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Decorative Coating
                </h1>
                <p className="leading-relaxed mb-3">
                 We offer decorative coating with highest quality and finest raw materials selected with precision according to the requirement of customers.
                </p>
                <Link to='products/decorative' className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-6 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Industrial Coating
                </h1>
                <p className="leading-relaxed mb-3">
                  We offer industrial coatings ranging from Hammertone, Stipple Finish, Putty Paints, High Gloss Enamels(Smooth Finish, Matt Finish), Fast Drying etc.
                </p>
                <Link to="products/industrial" className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-6 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Customizable Coating
                </h1>
                <p className="leading-relaxed mb-3">
                  We offer coatings customized by Gloss, Hiding Power, Drying Time,Modes Of Application, Cost, Packaging, Colour Matching, Finishes, Labelling, Properties, Substrate and Support. 
                </p>
                <Link to="products/customizable" className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
