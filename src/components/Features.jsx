import { FaRegCircleCheck } from "react-icons/fa6";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import img1 from '../assets/WhatsApp Image 2024-03-11 at 18.52.53_1bfbb851.jpg'
import img2 from '../assets/WhatsApp Image 2024-03-11 at 18.57.27_37256f31.jpg'
const Features = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePageFeaturesSection",
      });
      console.log(response);
      setData(response.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [t, i18n] = useTranslation();
  const lang = i18n.language;

  const feature = [
    {
      icon: <FaRegCircleCheck className="text-2xl" />,
      text: t("Expert Trainers"),
    },
    {
      icon: <FaRegCircleCheck className="text-2xl" />,
      text: t("Commitment to Health"),
    },
    {
      icon: <FaRegCircleCheck className="text-2xl" />,
      text: t("Diverse Classes"),
    },
    {
      icon: <FaRegCircleCheck className="text-2xl" />,
      text: t("State-of-the-Art Facilities"),
    },
    {
      icon: <FaRegCircleCheck className="text-2xl" />,
      text: t("Personalized Approach"),
    },
  ];

  return (
    <section className="w-full flex justify-center items-center mt-[120px]">
      <div className="w-[95%] flex flex-col justify-center items-center gap-[80px]">
        {/* Text */}
        <div className="flex flex-col justify-center items-center gap-10 mb-[60px]">
          <h2 className="text-[40px] text-center text-mainColor  md:text-[60px]">
            {lang === "en"
              ? data[0]?.fields?.headerEn
              : data[0]?.fields?.headerAr}
          </h2>
          <h2 className="max-w-[800px] text-center text-[18px]">
            {lang === "en"
              ? data[0]?.fields?.descriptionEn.content[0].content[0].value
              : data[0]?.fields?.descriptionAr.content[0].content[0].value}
          </h2>
          <div className="flex justify-center w-full h-full items-center  gap-12 max-w-[800px] flex-wrap flex-col md:flex-row">
            {feature.map((item, index) => (
              <div
                className="flex justify-center items-center gap-3 text-xl"
                key={index}
              >
                <div className="text-mainColor">{item.icon}</div>
                <h2>{item.text}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="w-full relative overflow-hidden h-[350px] sm:h-[430px] md:h-[430px] lg:h-[540px] xl:h-[650px] 2xl:h-[830px]">
          <div className=" absolute  left-0 top-0 w-[65%] sm:w-[75%] md:w-[55%]">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[65%] sm:w-[75%] md:w-[55%]  ">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
