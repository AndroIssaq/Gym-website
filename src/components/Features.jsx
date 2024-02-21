import { FaRegCircleCheck } from "react-icons/fa6";

const feature = [
  { icon: <FaRegCircleCheck className="text-2xl" />, text: "Expert Trainers" },
  {
    icon: <FaRegCircleCheck className="text-2xl" />,
    text: "Commitment to Health",
  },
  { icon: <FaRegCircleCheck className="text-2xl" />, text: "Diverse Classes" },
  {
    icon: <FaRegCircleCheck className="text-2xl" />,
    text: "State-of-the-Art Facilities",
  },
  {
    icon: <FaRegCircleCheck className="text-2xl" />,
    text: "Personalized Approach",
  },
];

const Features = () => {
  return (
    <section className="w-full flex justify-center items-center mt-[120px]">
      <div className="w-[95%] flex flex-col justify-center items-center gap-[80px]">
        {/* Text */}
        <div className="flex flex-col justify-center items-center gap-10 mb-[60px]">
          <h2 className="text-[40px] text-center  md:text-[60px]">
            We&apos;re Committed to Your Fitness Success
          </h2>
          <h2 className="max-w-[800px] text-center text-[18px]">
            At EliteGYM, we&apos;re more than just a fitness facility;
            we&apos;re a community dedicated to helping you achieve your health
            and fitness goals. With state-of-the-art equipment, experienced
            trainers, and a welcoming atmosphere, we&apos;re committed to
            providing you with the tools and support you need to succeed on your
            fitness journey.
          </h2>
          <div className="flex justify-center w-full h-full items-center  gap-12 max-w-[800px] flex-wrap flex-col md:flex-row">
            {feature.map((item, index) => (
              <div
                className="flex justify-center items-center gap-3 text-xl"
                key={index}
              >
                <div className="text-green-500">{item.icon}</div>
                <h2>{item.text}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="w-full relative overflow-hidden h-[250px] md:h-[430px] lg:h-[540px] xl:h-[650px] 2xl:h-[830px]">
          <div className=" absolute  left-0 top-0 w-[65%] sm:w-[75%] md:w-[55%]">
            <img
              src="gym.jpeg"
              alt=""
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[65%] sm:w-[75%] md:w-[55%]  ">
            <img
              src="gym1.jpeg"
              alt=""
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
