import { FaDumbbell } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoMdHeartHalf } from "react-icons/io";
import { BsListCheck } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { PiEggCrackBold } from "react-icons/pi";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePageServicesSection",
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

  const [i18n] = useTranslation();
  const lang = i18n.language;

  return (
    <section className="w-full mt-[120px] h-min flex justify-center items-center ">
      <div className="gap-12 h-min w-[95%] py-[70px] md:py-[120px] px-[16px] md:px-[32px] flex flex-col md:flex-row rounded-2xl justify-center bg-green-900">
        {/* Left */}
        <div
          className={` flex flex-col flex-1 self-start gap-6 md:sticky top-[80px] ${
            lang === "ar" ? "items-end text-end" : "items-start"
          } `}
        >
          <h2 className="text-[40px] md:w-[60%]">
            {lang === "en"
              ? data[0]?.fields?.headerEn
              : data[0]?.fields?.headerAr}
          </h2>
          <h2 className="text-[20px] md:w-[80%]">
            {lang === "en"
              ? data[0]?.fields?.descriptionEn
              : data[0]?.fields?.descriptionAr}
          </h2>
          <button className=" hover:drop-shadow-lg duration-300 w-fit px-[32px] py-[16px] bg-[#8CE91C] rounded-full text-black/75 text-[25px] md:text-xl hover:bg-[#8CE91C]/60">
            {lang === "en"
              ? data[0]?.fields?.buttonEn
              : data[0]?.fields?.buttonAr}
          </button>
        </div>
        {/* Right */}
        <div className="flex-1 grid grid-cols-2 gap-[55px]">
          {/* col-1 */}
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <FaDumbbell className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {lang === "en"
                  ? data[0]?.fields?.service1en
                  : data[0]?.fields?.service1ar}
              </h2>
              <h2 className="w-[90%]">
                {lang === "en"
                  ? data[0]?.fields?.serviceDes1en
                  : data[0]?.fields?.serviceDes1ar}
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <PiEggCrackBold className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {" "}
                {lang === "en"
                  ? data[0]?.fields?.service2en
                  : data[0]?.fields?.service2ar}
              </h2>
              <h2 className="w-[90%]">
                {lang === "en"
                  ? data[0]?.fields?.serviceDes2en
                  : data[0]?.fields?.serviceDes2ar}
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <BsListCheck className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {lang === "en"
                  ? data[0]?.fields?.service3en
                  : data[0]?.fields?.service3ar}
              </h2>
              <h2 className="w-[90%]">
                {lang === "en"
                  ? data[0]?.fields?.serviceDes3en
                  : data[0]?.fields?.serviceDes3ar}
              </h2>
            </div>
          </div>

          {/* col-2 */}
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-5">
              <GrGroup className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {lang === "en"
                  ? data[0]?.fields?.service4en
                  : data[0]?.fields?.service4ar}
              </h2>
              <h2 className="w-[90%]">
                {lang === "en"
                  ? data[0]?.fields?.serviceDes4en
                  : data[0]?.fields?.serviceDes4ar}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <IoMdHeartHalf className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {lang === "en"
                  ? data[0]?.fields?.service5en
                  : data[0]?.fields?.service5ar}
              </h2>
              <h2>
                {lang === "en"
                  ? data[0]?.fields?.serviceDes5en
                  : data[0]?.fields?.serviceDes5ar}
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <FaComputer className="text-2xl text-green-500" />
              <h2 className="text-[25px] text-white">
                {lang === "en"
                  ? data[0]?.fields?.service6en
                  : data[0]?.fields?.service6ar}
              </h2>
              <h2>
                {lang === "en"
                  ? data[0]?.fields?.serviceDes6en
                  : data[0]?.fields?.serviceDes6ar}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
