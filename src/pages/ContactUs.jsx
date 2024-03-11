import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Panner from "../components/Panner";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const [data, setData] = useState([]);
  const client = createClient({
    space: "4i5bqb3u6o2i",
    environment: "master", // defaults to 'master' if not set
    accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
  });

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "contactUs",
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
    <section className=" flex flex-col items-center justify-center  gap-[50px]">
      <Panner
        title={`${
          lang === "en"
            ? data[0]?.fields?.contactEn
            : data[0]?.fields?.contactAr
        }`}
      />
      <div
        className={`container  flex ${
          lang === "en"
            ? "lg:flex-row md:flex-row sm:flex-col flex-col"
            : "lg:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col"
        } items-center justify-center gap-[50px] `}
      >
        <div
          className={`info flex-1 flex flex-col ${
            lang === "ar" && "items-end text-end"
          }  `}
        >
          <h1 className="text-4xl font-bold  mb-2">
            {" "}
            {lang === "en"
              ? data[0]?.fields?.titleEn
              : data[0]?.fields?.titleAr}{" "}
          </h1>
          <div className="w-16 h-1 bg-mainColor mb-6" />
          <p className="mb-8">
            {lang === "en" ? data[0]?.fields?.deskEn : data[0]?.fields?.deskAr}
          </p>
          <div className="space-y-4">
            <div
              className={`flex items-center ${
                lang === "ar" && " flex-row-reverse items-end text-end"
              } gap-[10px]  space-x-2`}
            >
              <CiLocationOn className="text-mainColor w-6 h-6" />
              <span>
                {lang === "en"
                  ? data[0]?.fields?.adressEn
                  : data[0]?.fields?.adressAr}{" "}
              </span>
            </div>
            <div
              className={`flex items-center ${
                lang === "ar" && " flex-row-reverse items-end text-end"
              } gap-[10px]  space-x-2`}
            >
              <CiPhone className="text-mainColor w-6 h-6" />
              <span>026220202</span>
            </div>
            <div
              className={`flex items-center ${
                lang === "ar" && " flex-row-reverse items-end text-end"
              } gap-[10px]   space-x-2`}
            >
              <HiOutlinePaperAirplane className="text-mainColor w-6 h-6" />
              <span>info@worldgym.com</span>
            </div>
          </div>
        </div>
        <div className="bg-secondColor w-full flex-1 mb-[50px] p-8 rounded-lg shadow-md">
          <form
            action="#"
            className="grid  grid-cols-1 h-[50vh] gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            method="POST"
          >
            <div>
              <label
                className={`block text-sm font-medium text-mainColor tracking-wider ${
                  lang === "ar" && "text-end"
                }`}
                htmlFor="first-name"
              >
                {lang === "en"
                  ? data[0]?.fields?.nameEn
                  : data[0]?.fields?.nameAr}
              </label>
              <div className="mt-1">
                <input
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  id="first-name"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className={`block text-sm font-medium text-mainColor tracking-wider ${
                  lang === "ar" && "text-end"
                }`}
                htmlFor="email"
              >
                {lang === "en"
                  ? data[0]?.fields?.emailEn
                  : data[0]?.fields?.emaiAr}
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                className={`block text-sm font-medium text-mainColor tracking-wider ${
                  lang === "ar" && "text-end"
                }`}
                htmlFor="message"
              >
                {lang === "en"
                  ? data[0]?.fields?.messageEn
                  : data[0]?.fields?.messageAr}
              </label>
              <div className="mt-1">
                <textarea
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  id="message"
                  name="message"
                  rows="4"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainColor transition duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 tracking-wider"
                type="submit"
              >
                {lang === "en"
                  ? data[0]?.fields?.buttonEn
                  : data[0]?.fields?.buttonAr}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map w-[95%] mb-[50px] flex items-center justify-center">
        <iframe
          className="w-full h-[60vh] rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3630.8578868010336!2d54.3555504!3d24.4903804!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI5JzI1LjQiTiA1NMKwMjEnMjAuMCJF!5e0!3m2!1sen!2seg!4v1710176839512!5m2!1sen!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;


