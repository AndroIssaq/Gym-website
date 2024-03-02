import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";
import Title from "./Title";

const Plans = () => {
  const [plan, setPlan] = useState("monthly");
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePagePricingSection",
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
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="w-full my-[50px] flex justify-center items-center">
      <div className="w-[95%] flex flex-col justify-center items-center gap-8 px-[50px] overflow-hidden">
        {/* Title */}
        <Title  title= {lang === "en"
            ? data[0]?.fields?.headerEn
            : data[0]?.fields?.headerAr}
        />

        {/* Plans */}
        <div className="flex gap-2 border-2 rounded-lg">
          <button
            onClick={() => setPlan("monthly")}
            className={`cursor-pointer p-3 duration-300 text-[20px] rounded-md ${
              plan === "monthly" && "bg-green-500"
            }`}
          >
            {lang === "en"
              ? data[0]?.fields?.option1En
              : data[0]?.fields?.option1Ar}
          </button>
          <button
            onClick={() => setPlan("yearly")}
            className={`cursor-pointer p-3 rounded-md text-[20px] ${
              plan === "yearly" && "bg-green-500"
            }`}
          >
            {" "}
            {lang === "en"
              ? data[0]?.fields?.option2En
              : data[0]?.fields?.option2Ar}
          </button>
        </div>

        {/* Cards */}
        <div
          className={`flex justify-center items-center gap-10 ${
            lang === "en"
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          } `}
        >
          {/* Card 1 */}
          <div
            className={`flex flex-col w-full lg:flex-1  ${
              lang === "en" ? "items-start" : "items-end"
            }  py-9 px-5 bg-[#E9FAD5] gap-6 rounded-xl`}
          >
            <h2
              className={`text-black text-[40px] ${
                lang === "en" && "w-[20%]"
              } `}
            >
              {lang === "en"
                ? data[0]?.fields?.card1TitleEn
                : data[0]?.fields?.card1TitleAr}
            </h2>
            <h2
              className={`text-black/70 w-[80%] lg:w-[90%] ${
                lang === "ar" && "text-end"
              }`}
            >
              {lang === "en"
                ? data[0]?.fields?.card1DescEn
                : data[0]?.fields?.card1DescAr}
            </h2>
            <h2 className="text-black text-[30px] ">
              {plan === "yearly"
                ? `${
                    lang === "en"
                      ? data[0]?.fields?.card1YearPriceEn
                      : data[0]?.fields?.card1YearPriceAr
                  }`
                : ` ${
                    lang === "en"
                      ? data[0]?.fields?.card1PriceEn
                      : data[0]?.fields?.card1PriceAr
                  } `}
            </h2>
            <button className="py-3 px-5 bg-[#8CE91C] text-black rounded-full text-[20px] hover:drop-shadow-lg duration-300 hover:bg-[#8CE91C]/60">
              {lang === "en"
                ? data[0]?.fields?.card1BtnEn
                : data[0]?.fields?.card1BtnAr}
            </button>
          </div>

          {/* Card 2*/}
          <div
            className={`flex flex-col w-full lg:flex-1 py-[65px] px-5 bg-[#1A2C1B]  ${
              lang === "en" ? "items-start" : "items-end"
            }  gap-6 rounded-xl`}
          >
            <h2
              className={`text-[#8CE91C] text-[40px] ${
                lang === "en" && "w-[20%]"
              } `}
            >
              {" "}
              {lang === "en"
                ? data[0]?.fields?.card2TitleEn
                : data[0]?.fields?.card2TitleAr}
            </h2>
            <h2
              className={`text-white/70 w-[90%] ${lang === "ar" && "text-end"}`}
            >
              {lang === "en"
                ? data[0]?.fields?.card2DescEn
                : data[0]?.fields?.card2DescAr}
            </h2>
            <h2 className="text-white text-[30px]">
              {plan === "yearly"
                ? `${
                    lang === "en"
                      ? data[0]?.fields?.card2YearPriceEn
                      : data[0]?.fields?.card2YearPriceAr
                  }`
                : ` ${
                    lang === "en"
                      ? data[0]?.fields?.card2PriceEn
                      : data[0]?.fields?.card2PriceAr
                  } `}
            </h2>
            <button className="py-3 px-5 bg-[#8CE91C] text-black rounded-full text-[20px] hover:drop-shadow-lg duration-300 hover:bg-[#8CE91C]/60">
              {" "}
              {lang === "en"
                ? data[0]?.fields?.card1BtnEn
                : data[0]?.fields?.card1BtnAr}
            </button>
          </div>

          {/* Card 3*/}
          <div
            className={`flex flex-col w-full lg:flex-1 py-9 px-5 bg-[#E9FAD5]  ${
              lang === "en" ? "items-start" : "items-end"
            }  gap-6 rounded-xl`}
          >
            <h2
              className={`text-black text-[40px] ${
                lang === "en" && "w-[20%]"
              } `}
            >
              {" "}
              {lang === "en"
                ? data[0]?.fields?.card3TitleEn
                : data[0]?.fields?.card3TitleAr}
            </h2>
            <h2
              className={`text-black/70 w-[90%] ${lang === "ar" && "text-end"}`}
            >
              {" "}
              {lang === "en"
                ? data[0]?.fields?.card3DescEn
                : data[0]?.fields?.card3DescAr}
            </h2>
            <h2 className="text-black text-[30px]">
              {" "}
              {plan === "yearly"
                ? `${
                    lang === "en"
                      ? data[0]?.fields?.card3YearPriceEn
                      : data[0]?.fields?.card3YearPriceAr
                  }`
                : ` ${
                    lang === "en"
                      ? data[0]?.fields?.card3PriceEn
                      : data[0]?.fields?.card3PriceAr
                  } `}
            </h2>
            <button className="py-3 px-5 bg-[#8CE91C] text-black rounded-full text-[20px] hover:drop-shadow-lg duration-300 hover:bg-[#8CE91C]/60">
              {lang === "en"
                ? data[0]?.fields?.card1BtnEn
                : data[0]?.fields?.card1BtnAr}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
