import { CiDumbbell } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBodyOutline } from "react-icons/io5";
import { LuHeartCrack } from "react-icons/lu";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const CoreValue = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "aboutUs",
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

  const coreValues = [
    {
      icon: CiDumbbell,
      title: `${
        lang === "en" ? data[0]?.fields?.value1En : data[0]?.fields?.value1Ar
      }`,
      des: `${
        lang === "en"
          ? data[0]?.fields?.value1DeskEn
          : data[0]?.fields?.value1DeskAr
      }`,
    },
    {
      icon: FaPeopleGroup,
      title: `${
        lang === "en" ? data[0]?.fields?.value2En : data[0]?.fields?.value2Ar
      }`,
      des: `${
        lang === "en"
          ? data[0]?.fields?.value2DeskEn
          : data[0]?.fields?.value2DeskAr
      }`,
    },
    {
      icon: IoBodyOutline,
      title: `${
        lang === "en" ? data[0]?.fields?.value3En : data[0]?.fields?.value3Ar
      }`,
      des: `${
        lang === "en"
          ? data[0]?.fields?.value3DeskEn
          : data[0]?.fields?.value3DeskAr
      }`,
    },
    {
      icon: LuHeartCrack,
      title: `${
        lang === "en" ? data[0]?.fields?.value4En : data[0]?.fields?.value4Ar
      }`,
      des: `${
        lang === "en"
          ? data[0]?.fields?.value4DeskEn
          : data[0]?.fields?.value4DeskAr
      }`,
    },
  ];
  return (
    <div className="bg-[#0f331f] text-white container rounded-xl xl:h-[60vh] lg:h-[60vh]">
      <div className="p-[20px] flex flex-col items-center justify-center h-full">
        <Title
          title={`${
            lang === "en"
              ? data[0]?.fields?.valuesEn
              : data[0]?.fields?.valuesAr
          }`}
        />
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8  ">
          {coreValues.map((coreValue, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col items-center justify-center p-[20px]"
              >
                <coreValue.icon className="text-[#66ff00] text-[35px]" />
                <h3 className="text-[35px] font-semibold text-center">
                  {coreValue.title}
                </h3>
                <p className="  text-[#bcbbbb] text-center text-[15px] font-light">
                  {coreValue.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
