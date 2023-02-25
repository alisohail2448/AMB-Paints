import React from "react";
import sq from "../assets/sq.png";

const About = () => {
  return (
    <>
      <div className="">
        <section className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 z-20">
          <div className="pt-24 pb-6 uppercase text-center flex justify-start items-center ">
            <h3 className="border-r border-[#4d3286] pr-2">About Us</h3>
            <h2 className="text-[#4d3286] font-bold text-2xl ml-2">
              Who we are
            </h2>
          </div>
          <div className="pt-6">
            <div className="container m-auto  text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                  <img
                    className="rounded-md"
                    src={sq}
                    alt="image"
                    loading="lazy"
                    width=""
                  />
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    Nuxt development is carried out by passionate developers
                  </h2>
                  <p className="mt-6 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eum omnis voluptatem accusantium nemo perspiciatis delectus
                    atque autem! Voluptatum tenetur beatae unde aperiam,
                    repellat expedita consequatur! Officiis id consequatur atque
                    doloremque!
                  </p>
                  <p className="mt-4 text-gray-600">
                    {" "}
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat
                    iure expedita at? Asperiores nemo possimus nesciunt dicta
                    veniam aspernatur quam mollitia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1058%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c163 C 57.6%2c148.6 172.8%2c71 288%2c91 C 403.2%2c111 460.8%2c256.6 576%2c263 C 691.2%2c269.4 748.8%2c137.6 864%2c123 C 979.2%2c108.4 1036.8%2c191.8 1152%2c190 C 1267.2%2c188.2 1382.4%2c129.2 1440%2c114L1440 560L0 560z' fill='rgba(85%2c 56%2c 146%2c 0.6)'%3e%3c/path%3e%3cpath d='M 0%2c329 C 144%2c358.4 432%2c459.8 720%2c476 C 1008%2c492.2 1296%2c423.2 1440%2c410L1440 560L0 560z' fill='rgba(85%2c 56%2c 146%2c 0.65)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1058'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" alt="" className="curve" />
        {/* <div className="curve"></div> */}
      </div>
    </>
  );
};

export default About;
