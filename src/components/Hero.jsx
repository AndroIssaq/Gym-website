/* eslint-disable no-unused-vars */
import { FaWallet } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { PiHeartbeatFill } from "react-icons/pi";
import img from "../assets/pexels-the-lazy-artist-gallery-2247179.jpg";
import { useTranslation } from "react-i18next";
import { createClient } from "contentful";
import Button from "./Button";

const Hero = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePageHeroSection",
      });
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
  const infos = [
    { number: "1.5K", title: t("Happy Members") },
    { number: "2.5M", title: t("Calories Burnt") },
    { number: "3K", title: t("Hours Trained") },
    { number: "10", title: t("Fitness Trainers") },
  ];

  return (
    <section className="w-full justify-center items-center flex flex-col mt-8 ">
      <div className=" w-[95%] rounded-t-xl bg-secondColor flex  p-[25px]">
        {/* Upper Div */}
        <div
          className={`${
            lang === "ar"
              ? "lg:flex-row-reverse md:flex-col-reverse  flex-col-reverse "
              : "lg:flex-row md:flex-col-reverse  flex-col-reverse"
          } content w-full flex  gap-12 lg:gap-0  `}
        >
          {/* Text */}
          <div
            className={`  flex flex-1 flex-col gap-[20px] justify-center ${
              lang === "ar" ? "items-end text-end" : "text-start items-start"
            } `}
          >
            <h2 className="lg:tex`t-[35px] text-[25px] text-mainColor">
              {lang === "en"
                ? data[0]?.fields?.headerEn
                : data[0]?.fields?.headerAr}
            </h2>
            <p className=" text-[#fff] lg:text-[70px] text-[40px] tracking-wider">
              {lang === "en"
                ? data[0]?.fields?.descriptionEn
                : data[0]?.fields?.descriptionAr}
            </p>
            <Button
              name={
                lang === "en"
                  ? data[0]?.fields?.buttonEn
                  : data[0]?.fields?.buttonAr
              }
            />
          </div>

          {/* image here*/}
          <div className=" flex flex-1 justify-center items-center w-full h-full sm:mb-0 md:mb-20 transition-all duration-300 relative">
            <div className="w-[400px] h-[300px] sm:w-[400px] sm:h-[362px] md:w-[400px] md:h-[600px] xl:w-[600px] xl:h-[600px] flex justify-center items-center relative ">
              <img
                src={img}
                alt=""
                className="absolute w-full h-full object-fill md:object-fill z-20 rounded-xl"
              />
              <div className="absolute w-full h-full bg-[#cb31319e] rotate-[-3deg] z-[5] rounded-xl"></div>
              <div className="absolute w-full h-full bg-[#cb31319e] rotate-[-5deg] z-[2] rounded-xl"></div>
            </div>
            <div
              className={`hidden w-fit px-2 py-3 rounded-xl xl:flex bg-white  absolute justify-center items-center gap-x-2 z-[30] top-[100px] right-[-30px]`}
            >
              <div
                className={`${
                  lang === "ar" ? "xl:flex-row-reverse" : "xl:flex-row"
                } p-2 flex gap-x-2 text-lg bg-[#000] rounded-sm justify-center items-center text-mainColor`}
              >
                <FaWallet />
                <h2 className="text-mainColor ">
                  {lang === "en"
                    ? data[0]?.fields?.offerEn
                    : data[0]?.fields?.offerAr}
                </h2>
                <h2 className="text-[#fff] text-xl">
                  {t("for the first month")}
                </h2>
              </div>
            </div>

            <div className="hidden w-fit px-2 py-3 rounded-xl bg-white xl:flex absolute justify-center items-center gap-x-2 z-[40] bottom-[104px] left-[-40px]">
              <div
                className={`${
                  lang === "ar" ? "xl:flex-row" : "xl:flex-row"
                } p-2 flex gap-x-2 text-lg bg-[#000] rounded-sm justify-center items-center text-mainColor`}
              >
                <PiHeartbeatFill />
                <h2 className="text-mainColor ">{t("free")}</h2>
                <h2 className="text-[#fff] text-xl">
                  {lang === "en"
                    ? data[0]?.fields?.healthAssessmentEn
                    : data[0]?.fields?.healthAssessmentAr}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="info w-full  flex items-center justify-center">
        <div className="content w-[95%]  bg-[#cb31319e]  rounded-b-xl  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2   gap-[20px] px-[20px] py-[50px] ">
          {infos.map((info, index) => {
            return (
              <div
                key={index}
                className={`flex  ${
                  lang === "ar"
                    ? "lg:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col  items-start justify-center"
                    : ""
                } xl:text-[35px] lg:text-[30px] md:text-[25px]  sm:text-[25px] text-[25px] leading-10 gap-1 md:gap-5 `}
              >
                <h2 className="text-[#000]">{info.number}</h2>
                <h2>{info.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
