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
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <h1 className="text-4xl font-bold  mb-2">
            {" "}
            {lang === "en"
              ? data[0]?.fields?.titleEn
              : data[0]?.fields?.titleAr}{" "}
          </h1>
          <div className="w-16 h-1 bg-[#00d084] mb-6" />
          <p className="mb-8">
            {lang === "en" ? data[0]?.fields?.deskEn : data[0]?.fields?.deskAr}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-[#00d084] w-6 h-6" />
              <span>
                {lang === "en"
                  ? data[0]?.fields?.adressEn
                  : data[0]?.fields?.adressAr}{" "}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <CiPhone className="text-[#00d084] w-6 h-6" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlinePaperAirplane className="text-[#00d084] w-6 h-6" />
              <span>info@elitegym.com</span>
            </div>
          </div>
        </div>
        <div className="bg-[#c9e9d3] mb-[50px] p-8 rounded-lg shadow-md">
          <form
            action="#"
            className="grid  grid-cols-1 h-[50vh] gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            method="POST"
          >
            <div>
              <label
                className={`block text-sm font-medium text-gray-700 ${
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
                className={`block text-sm font-medium text-gray-700 ${
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
                className={`block text-sm font-medium text-gray-700 ${
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
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
    </section>
  );
};

export default ContactUs;
