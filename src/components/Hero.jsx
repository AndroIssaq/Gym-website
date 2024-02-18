import { FaWallet } from "react-icons/fa6";
import { PiHeartbeatFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="w-full justify-center items-center flex mt-8 h-full">
      <div className="w-[95%] rounded-xl nav-content flex flex-col">
        <div className="p-[25px]">
          {/* Upper Div */}
          <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-12 lg:gap-0 justify-between mt-[40px] lg:mt-[80px] mb-[120px] w-full">
            {/* Text */}
            <div className="flex flex-col flex-1 gap-[20px] justify-center">
              <h2 className="lg:text-[35px] text-[25px] text-[#8CE91C]">
                get ready
              </h2>
              <p className="lg:text-[70px] text-[40px] tracking-wider">
                we are going to
                <span className="text-[#8CE91C]"> transform you!</span>
              </p>
              <button className=" hover:drop-shadow-lg w-fit px-[32px] py-[16px] bg-[#8CE91C] rounded-full text-black/75 text-[25px] md:text-xl hover:bg-[#8CE91C]/60">
                view classes
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 justify-center lg:justify-start items-start flex relative hover:drop-shadow-lg	">
              <div className="z-1 md:w-[300px] w-[500px] h-[350px] lg:w-[450px] lg:h-[600px] overflow-hidden rounded-xl ">
                <img
                  className="object-cover h-full w-full  hover:scale-105 transition-all"
                  src="download.jpeg"
                  alt=""
                />
              </div>

              {/* Cards*/}
              <div className="absolute rounded-xl -z-10  rotate-[-3deg] top-0 md:w-[300px] w-[500px] h-[350px] lg:w-[450px] lg:h-[600px] bg-black"></div>
              <div className="absolute rounded-xl -z-20  rotate-[-5deg] top-0 md:w-[300px] w-[500px] h-[350px] lg:w-[450px] lg:h-[600px] bg-white"></div>

              <div className="hidden w-fit px-2 py-3 rounded-xl bg-white lg:flex absolute justify-center items-center gap-x-2 top-[90px] right-[30px]">
                <div className="p-2 flex gap-x-2 text-lg bg-green-900 rounded-sm justify-center items-center text-[#8CE91C]">
                  <FaWallet />
                  <h2 className="text-[#8CE91C] ">50% off</h2>
                </div>
                <h2 className="text-black/60 text-xl">for the first month</h2>
              </div>

              <div className="hidden w-fit px-2 py-3 rounded-xl bg-white lg:flex absolute justify-center items-center gap-x-2 bottom-[90px] left-[-40px]">
                <div className="p-2 flex gap-x-2 text-lg bg-green-900 rounded-sm justify-center items-center text-[#8CE91C]">
                  <PiHeartbeatFill />
                  <h2 className="text-[#8CE91C] ">free</h2>
                </div>
                <h2 className="text-black/60 text-xl">Health Assessment</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Div */}
        <div className="bg-[#162617] gap-10 rounded-b-xl min-h-[250px] grid grid-cols-2 lg:flex justify-center lg:flex-wrap items-center md:gap-[50px] p-6 ">
          <div className="flex flex-col md:flex-row items-start justify-center text-[30px] md:text-[35px] leading-10 gap-1 md:gap-5 ">
            <h2 className="text-[#8CE91C]">1.5k</h2>
            <h2>happy members</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center text-[30px] md:text-[35px] leading-10 gap-1 md:gap-5">
            <h2 className="text-[#8CE91C]">2.5m</h2>
            <h2>Calories Burnt</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center text-[30px] md:text-[35px] leading-10 gap-1 md:gap-5">
            <h2 className="text-[#8CE91C]">3k</h2>
            <h2>Hours Trained</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center text-[30px] md:text-[35px] leading-10 gap-1 md:gap-5">
            <h2 className="text-[#8CE91C]">10</h2>
            <h2>Fitness Trainers</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
